import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import Layout from "../../../components/common/layout"
import Loader from "../../../components/common/loader"

const BookmarkAddPage: React.FC = () => {
  const [state, setState] = useState({
    link: "",
    title: "Some hardcoded title",
    showLoader: false
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Inertia.post("/bookmark/preview", state, {
      onStart: () => {
        setState({ ...state, showLoader: true })
      }
    })
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          {state.showLoader ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  value={state.link}
                  onChange={handleChange}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkAddPage
