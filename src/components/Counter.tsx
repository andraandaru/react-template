import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  )
}

export default Counter
