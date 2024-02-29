import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { signUp, logIn } from '../../../utils/backend'

export default function AuthForm({ setLoginStatus }) {
    const { formType } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        // prevent page from refreshing when the form is submitted
        event.preventDefault()

        if (formType === 'login') {
            const { token } = await logIn(formData)
            localStorage.setItem('userToken', token)
            setLoginStatus(true)
        } else {
            const { token } = await signUp(formData)
            localStorage.setItem('userToken', token)
            setLoginStatus(true)
        }
        // Redirect to home page
        navigate('/')
    }

    let actionText
    formType === 'login' ? actionText = 'Log In' : actionText = 'Sign Up'

    return (
        <div className="is-flex">
            <div>
                <h1>{actionText}</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="is-block" htmlFor="email">
                            Email
                        </label>
                        <input
                            className=""
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="is-block" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            minLength="6"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button 
                            className="button is-primary"
                            type="submit"
                        >
                            {actionText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}