import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import { ActionMeta, OptionTypeBase, ValueType } from "react-select"
import AsyncCreatableSelect from "react-select/async-creatable"
import Layout from "../../../components/common/layout"
import Loader from "../../../components/common/loader"

interface ISelectOption extends OptionTypeBase {}

const defaltOptions: ValueType<ISelectOption, true> = [
  { label: "Amitav", value: "Amitav" }
]

interface IState {
  link: string
  title: string
  showLoader: boolean
  tags: ValueType<ISelectOption, true>
}

const BookmarkAddPage: React.FC = () => {
  const [state, setState] = useState<IState>({
    link: "",
    title: "Some hardcoded title",
    showLoader: false,
    tags: defaltOptions
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
                  placeholder="Enter your link here"
                />
              </div>
              <div>
                <p>Tags:</p>
                <AsyncCreatableSelect
                  value={state.tags}
                  getOptionLabel={({ label }) => label}
                  getOptionValue={({ value }) => value}
                  defaultOptions={defaltOptions}
                  loadOptions={value => {
                    return fetch(`/api/tags?tag=${value}`)
                      .then(response => response.json())
                      .then((data: Array<{ name: string }>) => {
                        return data.map(({ name }) => {
                          return { label: name, value: name }
                        })
                      })
                  }}
                  onChange={(
                    value: ValueType<ISelectOption, true>,
                    action: ActionMeta<OptionTypeBase>
                  ) => setState({ ...state, tags: value })}
                  isMulti
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
