import { Inertia } from "@inertiajs/inertia"
import React, { useState, useEffect } from "react"
import { ActionMeta, OptionTypeBase, ValueType } from "react-select"
import AsyncCreatableSelect from "react-select/async-creatable"
import route from "ziggy-js"
import Layout from "../../../components/common/layout"
import IBookmark from "../../../Contracts/IBookmark"

interface Props {
  bookmark: IBookmark
}

interface ISelectOption extends OptionTypeBase {}

const defaltOptions: ValueType<ISelectOption, true> = [
  { label: "Amitav", value: "Amitav" }
]
interface IState {
  tags: ValueType<ISelectOption, true>
}

const BookmarkViewPage: React.FC<Props> = ({ bookmark }) => {
  const [state, setState] = useState<IState>({
    tags: defaltOptions
  })
  useEffect(() => {
    const bookmarkTags = bookmark.tags.map(({ name: label }) => {
      return { label, value: label }
    })
    setState({ tags: bookmarkTags })
  }, [])
  const handleSave = (event: React.MouseEvent) => {
    event.preventDefault()
    if (!bookmark.is_active) {
      Inertia.post("/bookmark/make-active", {
        id: bookmark.id,
        tags: state.tags
      })
    } else {
      Inertia.post(route("bookmark.update").url(), {
        tags: state.tags,
        id: bookmark.id
      })
    }
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-md-6">
          {bookmark.title && (
            <div className="card">
              <div className="card-header">{bookmark.title}</div>
              <div className="card-body">
                <p>Url: {bookmark.url}</p>
                <p>{bookmark.description}</p>
                <div className="mb-3">
                  <img
                    src={bookmark.img_url}
                    alt={bookmark.title}
                    width="100%"
                  />
                </div>
                <div className="mb-3">
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
                </div>
                <button className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkViewPage
