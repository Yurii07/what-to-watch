import { useState, FC } from 'react'
import { Center } from '@chakra-ui/react';
import './form.scss'
import { Link } from 'react-router-dom';

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <Center h="100vh">
            <div className="container-form">
                <h1>{title}</h1>
                <div className="form-element">
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label className="floating-label"
                        htmlFor="email"
                    >Email</label>
                </div>
                <div className="form-element">
                    <input type="password" name="password" id="password" value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="password" required />
                    <label className="floating-label"
                        htmlFor="password"
                    >Password</label>
                </div>
                <button className="btn" onClick={() => handleClick(email, pass)}> {title}</button>
                <Link className='link' to="/">back</Link>
            </div>
        </Center>
    )
}

export { Form }