import React, { createContext } from "react"
import ReactDOM from "react-dom"
import "babel-polyfill"
import Main from "components/Main"

ReactDOM.render(
  <React.unstable_AsyncMode>
    <Main />
  </React.unstable_AsyncMode>,
  document.getElementById("root")
)
