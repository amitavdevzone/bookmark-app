import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSync } from "@fortawesome/free-solid-svg-icons"

const Loader: React.FC = () => {
  return <FontAwesomeIcon icon={faSync} spin size="5x" />
}

export default Loader
