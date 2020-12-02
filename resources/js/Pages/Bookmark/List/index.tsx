import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"
import route from "ziggy-js"
import BookmarkItem from "../../../components/bookmark/BookmarkItem"
import Layout from "../../../components/common/layout"
import IBookmark from "../../../Contracts/IBookmark"

interface Props {
  bookmarks: Array<IBookmark>
}

const BookmarkListPage: React.FC<Props> = ({ bookmarks }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <ul className="list-group">
            {bookmarks.length > 0 &&
              bookmarks.map((bookmark, index) => {
                return <BookmarkItem key={index} bookmark={bookmark} />
              })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkListPage
