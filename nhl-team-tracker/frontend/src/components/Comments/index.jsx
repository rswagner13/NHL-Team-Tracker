import { useState } from 'react'
import { updateComment, deleteComment} from '../../../utils/backend'

export default function Comment({ data, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        content: data.content
    })
}