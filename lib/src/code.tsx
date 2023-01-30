import { LanguageAlias, extractAnnotations } from "@code-hike/lighter"
import { FinalCode, FinalCodeProps } from "./final-code"

// children when it comes from the Markdown pre element
type MdCodeText = {
  type: "code"
  props: { className: string; children: string }
}
export type CodeText = string | MdCodeText

export type InnerCodeProps = Omit<FinalCodeProps, "code"> & {
  children: CodeText
}

function parseChildren(
  children: CodeText,
  lang: LanguageAlias
): { code: string; language: LanguageAlias } {
  if (typeof children === "object") {
    return {
      code: children.props?.children,
      language: children.props?.className.replace(
        "language-",
        ""
      ) as LanguageAlias,
    }
  } else {
    return {
      code: children,
      language: lang,
    }
  }
}

export async function Code(props: InnerCodeProps) {
  const { children, lang, extensions, ...rest } = props

  let { code: text, language } = parseChildren(children, lang)
  text = text.trim()

  const extensionNames = Object.keys(extensions)
  const { code, annotations } = await extractAnnotations(
    text,
    language,
    extensionNames
  )

  let newProps = {
    ...rest,
    extensions,
    code,
    lang: language,
    annotations,
  } as FinalCodeProps
  annotations.forEach((annotation) => {
    const extension = extensions[annotation.name]
    if (
      extension &&
      "beforeHighlight" in extension &&
      typeof extension.beforeHighlight === "function"
    ) {
      newProps = extension.beforeHighlight(newProps, annotation.query)
    }
  })

  //  @ts-expect-error Server Component
  return <FinalCode {...newProps} />
}
