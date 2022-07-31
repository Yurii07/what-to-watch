import { useState, FC, ChangeEvent } from 'react'
import { Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './form.scss'

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState<string | null>(null);

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setEmail(event.target.value);
    };

    return (
        <Center h="100vh">
            <div className="container-form">
                <h1>{title}</h1>
                <div className="form-element">
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} required />
                    <label className="floating-label"
                        htmlFor="email"
                    >Email</label>

                    {error && <h2 style={{ color: 'red' }}>{error}</h2>}
                </div>
                <div className="form-element">
                    <input type="password" name="password" id="password" value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        required />
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