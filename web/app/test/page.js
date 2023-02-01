import { Code } from "bright"
import { Wrapper, Input } from "../../client-components"

Code.theme = "dracula"
Code.extensions = {
  input: {
    InlineAnnotation: ({ query, content }) => (
      <Input defaultValue={content} name={query} />
    ),
  },
}
const code = `
<div
  style={{
    // input[13:19] color
    color: "#fafafa",
    // input[18:24] bg
    background: "#222222",
  }}
>
  Hello World
</div>`

export default function Page() {
  return (
    <Wrapper>
      <Code lang="jsx">{code}</Code>
    </Wrapper>
  )
}
