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
      <div className="mt-3 p-2">
        <p style={{ textAlign: "center" }}>Copyright &copy; 2020</p>
      </div>
    </React.Fragment>
  )
}

export default Layout
