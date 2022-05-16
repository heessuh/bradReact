import React, { useState } from "react"
import { createRoot } from "react-dom/client"

function App() {
  const [fontSize, setFontSize] = useState(15)
  const [fontColor, setFontColor] = useState("green")
  const [likeCount, setLikeCount] = useState(0)

  function handleClick() {
    setFontSize(20)
    setFontColor("pink")
  }

  return (
    <div className="grid-parent">
      <div className="header">
        <h1>Welcome To Our App!!</h1>
        <p>
          The current size is {fontSize} and the current color is {fontColor}.
        </p>
        <p>
          This page has been liked <strong>{likeCount}</strong> times.
        </p>
      </div>
      <div className="sidebar">
        <input type="text" placeholder="font size" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
        <input type="text" placeholder="font color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
        <button onClick={handleClick}>Make the text 20px and pink</button>
      </div>
      <div className="main-area" style={{ color: fontColor, fontSize: `${fontSize}px` }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
      </div>
      <footer className="footer">
        <p>
          This is the footer. <button onClick={() => setFontSize(30)}>Make the text 30px but leave the color the same</button>
        </p>
        <p>
          <button onClick={() => setLikeCount((prev) => prev + 1)}>Like The Page</button>
        </p>
      </footer>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
