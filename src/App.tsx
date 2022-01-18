import "../public/styles.css"
import IMAGE from "./assets/images/react.png"
import LOGO from "./assets/icon/logo.svg"

const App = () => {
  return (
    <div>
      <h1>
        Hello World from {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width={500} height={250} />
      <img src={LOGO} alt="React Logo" width={300} height={300} />
    </div>
  )
}

export default App
