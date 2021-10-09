console.log('lalala')

// const element = <h1 title="foo">Hello</h1>

// const element = React.createElement(
//   "h1",
//   { title: "foo" },
//   "Hello"
// )

// More: https://github.com/facebook/react/blob/f4cc45ce962adc9f307690e1d5cfa28a288418eb/packages/react/src/ReactElement.js#L111
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}

const container = document.getElementById("root")

// ReactDOM.render(element, container)

const node = document.createElement(element.type)
node["title"] = element.props.title
const text = document.createTextNode("")
text["nodeValue"] = element.props.children
node.appendChild(text)
container.appendChild(node)
