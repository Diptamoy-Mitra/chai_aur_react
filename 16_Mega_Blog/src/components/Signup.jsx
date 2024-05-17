import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from '../components/index'
import { useForm } from 'react-hook-form'


function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    //create account
    async function create(data) {
        setError("");
        try {

            //create account on service 
            const userData = await authService.createAccount(data);

            if (userData) {
                //store current user data
                const userData = await authService.getCurrentUser();
                //if i get user data then store into store
                if (userData) {
                    dispatch(login(userData))
                    navigate("/")
                }
            }

        } catch (error) {
            setError(error.message)
        }

    }


    return (
        //  full container
        <div className='flex items-center w-full justify-center'>
            {/* sign up box */}
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10`}>
                {/* for logo */}
                <div className="mb-2 flex justify-center">
                    <span className="max-w-[100px] w-full inline-block">
                        <Logo width='100%' />
                    </span>
                </div>
                {/* for box title */}
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
                {/* already have account */}
                <p className="mt-2 text-center text-base text-black/10">
                    Already have an account?&nbsp;
                    <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>Sign in</Link>
                </p>
                {/* display errors */}
                {
                    error && <p className='text-red-600 mt-8 text-center'>{error}</p>

                }

                {/* form */}
                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label='Full Name: '
                            placeholder='Enter your full name'
                            type='text'
                            {...register('name', { required: true })}
                        />
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

                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {
                            ...register("password", {
                                required: true
                            })
                            }
                        />
                        <Button type='submit' className='w-full'>Create Account</Button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Signup
