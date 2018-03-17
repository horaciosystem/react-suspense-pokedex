import React, { createContext } from "react"
import ReactDOM from "react-dom"
import "babel-polyfill"
import Main from "./main"

ReactDOM.render(
  <React.unstable_AsyncMode>
    <Main />
  </React.unstable_AsyncMode>,
  document.getElementById("root")
)
