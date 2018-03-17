import React, { Timeout } from "react"

export default function Loader({ ms, fallback, children }) {
  return (
    <Timeout ms={ms}>
      {didTimeout => (didTimeout ? fallback : children)}
    </Timeout>
  )
}
