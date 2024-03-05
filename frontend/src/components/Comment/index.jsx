import { useState } from 'react'
import { updateComment, deleteComment} from '../../../utils/backend'
import './styles.css'

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
                    className="input is-primary is-normal mb-4"
                    placeholder="Your name"
                    value={editFormData.name}
                    onChange={handleInputChange}
                />
                <br />
                <textarea 
                    name="content"
                    className="textarea is-normal mb-4"
                    placeholder="Type your comment here"
                    value={editFormData.content}
                    onChange={handleInputChange}
                />
                <div>
                    <button
                        onClick={() => { setShowEditForm(false) }}
                        className="button has-text-white">
                        Close
                    </button>
                    <button
                        type="submit"
                        className="button has-text-white">
                        Post
                    </button>
                </div>
            </form>
        )
    } else {
        return (
            <div className="user-comment-container mt-2">
                <div className="user-comment-details mb-2">
                    <p className="username has-text-black">{data.name}</p>
                    <p className="comment-message has-text-black">{data.content}</p>
                </div>
                <div>
                    <button
                        onClick={() => { setShowEditForm(true) }}
                        className="button has-text-white mr-2">
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="button has-text-white ml-2">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}