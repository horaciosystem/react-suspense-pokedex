import React, { Timeout } from "react"
import Placeholder from "components/Placeholder"

export default function Loader({
  ms = 1000,
  fallback = <Placeholder />,
  children
}) {
  return <Timeout ms={ms}>{loading => (loading ? fallback : children)}</Timeout>
}
