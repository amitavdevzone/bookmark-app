import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import Layout from "../../../components/common/layout"

interface Props {
  data?: any
  link?: string
}

const BookmarkAddPage: React.FC<Props> = ({ data, link }) => {
  const [state, setState] = useState({
    link: "",
    title: "Some hardcoded title"
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Inertia.post("/bookmark/preview", state)
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="link">Link</label>
              <input
                type="text"
                className="form-control"
                name="link"
                value={link || state.link}
                onChange={handleChange}
              />
            </div>
          </form>

          {data && data.title && (
            <div className="card">
              <div className="card-header">{data.title}</div>
              <div className="card-body">
                <p>{data.description}</p>
                <img src={data.image} alt={data.title} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkAddPage
