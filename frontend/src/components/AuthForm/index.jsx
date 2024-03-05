import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { signUp, logIn } from '../../../utils/backend'
import './styles.css'

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
    if(formType === 'login') {
        actionText = 'Log In'
    } else { 
        actionText = 'Sign Up'
    }

    return (
        <>
            <div className="form-background-image">
            <img src="../public/nhl-shield.png" />
            <div className="is-widescreen mx-4">
                <h1 className="is-size-2 mb-3 mt-3">{actionText}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label is-block is-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="input is-medium"
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label is-block is-medium" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="input is-medium"
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
        </>
    )
}