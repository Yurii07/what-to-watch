import { FC } from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const LoginPage: FC = () => {
    return (
        <div>
            LoginPag
            <Login />
            <p>or <Link to="/register">register</Link></p>
        </div>
    )
}

export default LoginPage