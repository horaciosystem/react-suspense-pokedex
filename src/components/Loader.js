import React, { Timeout } from "react"

export default function Loader({ ms, fallback, children }) {
  return <Timeout ms={ms}>{loading => (loading ? fallback : children)}</Timeout>
}
