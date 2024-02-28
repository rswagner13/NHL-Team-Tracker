import { useState } from 'react'
import { updateComment, deleteComment} from '../../../utils/backend'

export default function Comment({ data, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        content: data.content
    })

    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setShowEditForm(false)
        updateComment(editFormData, data._id)
            .then(() => refreshComments())
    }

    function handleDelete() {
        deleteComment(data._id)
            .then(() => refreshComments())
    }

    if (showEditForm){
        return (
            <form
                onSubmit={handleSubmit}
                className="">
                <input 
                    name="name"
                    className=""
                    placeholder="Your name"
                    value={editFormData.name}
                    onChange={handleInputChange}
                />
                <br />
                <textarea 
                    name="content"
                    className=""
                    placeholder="Type your comment here"
                    value={editFormData.content}
                    onChange={handleInputChange}
                />
                <div>
                    <button
                        onClick={() => { setShowEditForm(false) }}
                        className="button">
                        Close
                    </button>
                    <button
                        type="submit"
                        className="button">
                        Post
                    </button>
                </div>
            </form>
        )
    } else {
        return (
            <div
                className="">
                <p className="">{data.name}</p>
                <p className="">{data.content}</p>
                <div className="">
                    <button
                        onClick={() => { setShowEditForm(true) }}
                        className="button is-warning">
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="button is-danger">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}