
import { useState, useEffect } from 'react'
import { postComment, getComments } from '../../../utils/backend'
import Comment from '../Comment'

export default function CommentSection({ teamId }) {
    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        content: ''
    })

    //Query the database for all comments for this team
    useEffect(() => {
        getComments(teamId)
            .then(comments => setComments(comments))
    }, [])

    function handleInputChange(event) {
        setCreateFormData({
        ...createFormData,
        [event.target.name]: event.target.value
        })
    }

    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    function refreshComments() {
        getComments(teamId)
            .then(newCommentData => setComments(newCommentData))
    }

    function handleSubmit(event) {
        event.preventDefault()

        setCreateFormData({
            name: '',
            content: '',
        })

        setShowCreateForm(false)

        postComment({ ...createFormData, teamId: teamId})
            .then(() => refreshComments())
    }

    let commentElements = [<p key='0' className="">No Comments Made</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment 
                key={comment._id}
                data={comment}
                refreshComments={refreshComments}
            />
        })
    }

    let buttonText = 'Add a new comment'
    if (showCreateForm) {
        buttonText = 'Close'
    }

    return (
        <>
            <div className="comment-section">
                <h1 className="comment-section-title mb-2 is-size-1 has-text-black">Comment Section</h1>
                <button 
                    onClick={toggleCreateForm}
                    className="button is-primary mb-2">
                    {buttonText}
                </button>
                {
                    showCreateForm && <form
                        onSubmit={handleSubmit}
                        className="">
                        <input 
                            name="name"
                            className="input is-primary is-normal mb-4"
                            placeholder="Your name"
                            value={createFormData.name}
                            onChange={handleInputChange}
                        />
                        <br />
                        <textarea 
                            name="content"
                            className="textarea is-normal mb-4"
                            placeholder="Type your comment here"
                            value={createFormData.content}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="button is-primary">
                            Post
                        </button>
                    </form>
                }

                {commentElements}
            </div>
        </>
    )
}