import { demo, Demo } from "./demo"
import { SocialLinks } from "./icons"
import { WithBackground } from "./with-background"

export default async function Page() {
  return (
    <div>
      <div style={{ height: "5rem" }} />
      <Title />

      <div style={{ height: "4rem" }} />
      <Demo
        demo={demo({
          children: (
            <span style={{ color: "var(--text-color)" }}>
              print("hello brightness")
            </span>
          ),
          props: (
            <>
              <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
              <span style={{}}>=</span>
              <span style={{}}>"</span>
              <span style={{ color: "rgb(195, 232, 141)" }}>py</span>
              <span style={{}}>"</span>
            </>
          ),
        })}
        code='print("hello brightness")'
      />
      <div style={{ height: "3rem" }} />
      <Details />

      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Line Numbers</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                let hello = "hello brightness"
              </span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                console.log(hello, "my old friend")
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
            </>
          ),
          props: (
            <>
              <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
              <span>="</span>
              <span style={{ color: "rgb(195, 232, 141)" }}>js</span>
              <span>" </span>
              <span style={{ color: "rgb(199, 146, 234)" }}>lineNumbers</span>
            </>
          ),
          children: <span style={{}}>{`{myCode}`}</span>,
        })}
        code={`let hello = "hello brightness"
console.log(hello, "my old friend")`}
        codeProps={{ lineNumbers: true, lang: "js" }}
      />

      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Global Props</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                let hello = "hello brightness"
              </span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                console.log(hello, "my old friend")
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
              <span style={{ color: "rgb(195, 232, 141)" }}>
                // set any prop globally
              </span>
              <br />
              <span>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>
                .lineNumbers = true
              </span>
              <br />
              <br />
            </>
          ),
          props: (
            <>
              <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
              <span>="</span>
              <span style={{ color: "rgb(195, 232, 141)" }}>js</span>
              <span>"</span>
            </>
          ),
          children: <span style={{}}>{`{myCode}`}</span>,
        })}
        code={`let hello = "hello brightness"
console.log(hello, "my old friend")`}
        codeProps={{ lineNumbers: true, lang: "js" }}
      />

      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Markdown / MDX</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({})}
        code={`let hello = "hello brightness"
console.log(hello, "my old friend")`}
        codeProps={{ lineNumbers: true, lang: "js" }}
      />

      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Line Numbers</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({})}
        code={`let hello = "hello brightness"
console.log(hello, "my old friend")`}
        codeProps={{ lineNumbers: true, lang: "js" }}
      />

      <div style={{ height: "3rem" }} />
    </div>
  )
}

function Title() {
  return (
    <WithBackground
      style={{
        fontSize: "2.8em",
        fontWeight: 800,
        color: "#ddd8",
        textAlign: "center",
        lineHeight: "1.5em",
      }}
      fg={{ color: "#ddd" }}
      blur={30}
    >
      React server component
      <br /> for{" "}
      <span style={{ color: "rgb(255, 203, 107)" }}>syntax highlighting</span>
    </WithBackground>
  )
}

function Details() {
  return (
    <WithBackground fg={{ color: "#ccc" }} bg={{ color: "#ccc2" }} blur={20}>
      <ul
        style={{
          fontSize: "1.45em",
          fontWeight: "600",
          width: "max-content",
          margin: "0 auto",
        }}
      >
        <li>
          <span>Runs on the server. </span>
          <span style={{ color: "rgb(195, 232, 141)" }}>
            No impact on bundle-size.
          </span>
        </li>
        <li>
          <span style={{ color: "rgb(255, 203, 107)" }}>No extra configs.</span>
          <span> Install it, import it, and use it.</span>
        </li>
        <li>
          <span>VS Code's syntax highlighting. </span>
          <span style={{ color: "#fb7fec" }}>All the themes.</span>
        </li>
      </ul>
      <div style={{ height: "2rem" }} />
      <SocialLinks />
    </WithBackground>
  )
}