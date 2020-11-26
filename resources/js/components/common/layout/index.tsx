import React from "react"
import Menu from "../nav"

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <Menu />
      </div>
      <div className="container">{children}</div>
    </React.Fragment>
  )
}

export default Layout
