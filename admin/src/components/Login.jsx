import react, { useState } from 'react'
import axios from 'axios'
import { backendURL } from '../App';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendURL + '/api/user/admin', { email, password });
            console.log(response.data);
            if (response.data.success) {
                setToken(response.data.token);
            }
            else{
                toast.error(response.data.message)
            }
        } catch (error) {
           console.log(error);
           toast.error(error.message); 
        }
    }
    return (
        <>
            < div className='min-h-screen flex items-center justify-center w-full' >
                <div className='bg-white shadow-md rounded-lg px-4 py-6 max-w-md'>
                    <h1 className='text-2xl font-bold mb-4'>Admin Form</h1>
                    <form onSubmit={onSubmitHandler}>
                        <div className='mb-3 min-w-72'>
                            <p className='text-sm font-medium text-gray-700 mb-2 mt-2'>E-mail</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full rounded-md px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
                        </div>
                        <div className='mb-3 min-w-72'>
                            <p className='text-sm font-medium text-gray-700 mb-2 mt-2'>Password</p>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full rounded-md px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter Password' required />
                        </div>
                        <button className='mt-3 rounded border border-gray-600 text-md font-medium p-2 m-4 bg-black text-white cursor-pointer' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
};
export default Login