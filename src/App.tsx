import "../public/styles.css"
import IMAGE from "./assets/images/react.png"

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <img src={IMAGE} alt="React Logo" width={500} height={250} />
    </div>
  )
}

export default App
