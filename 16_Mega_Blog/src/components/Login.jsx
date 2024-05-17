import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from '../components/index'
import { useForm } from 'react-hook-form'



function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    //login function
    async function login(data) {
        setError("");
        try {

            //check login, return promises
            const session = await authService.login(data);

            //check session
            if (session) {
                const userData = await authService.getCurrentUser();

                //store user data into store if present
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/")
                }
            }

        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className='flex items-center w-full justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>

                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>
                    Sign in to your account
                </h2>

                <p className="">
                    Don&apos;t have any account?&nbsp;
                    <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>
                        Sign up
                    </Link>
                </p>
                {
                    error && <p className='text-red-500 mt-8 text-center'>{error}</p>
                }
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {
                            ...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })
                            }
                        />
                        <Input
                            type="password"
                            label="Password: "
                            placeholder="Enter your password"
                            {
                            ...register("password", {
                                required: true,

                            })

                            }
                        />
                        <Button type='submit' className='w-full'>Sign in</Button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Login
