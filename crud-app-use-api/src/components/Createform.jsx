import { Box, Grid } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../common/Input';
import Button from '../common/Button';
import { doPostApi } from '../../utils/ApiConfig';
import { Link, useNavigate } from 'react-router-dom';

function Createform() {

    //navigate
    const navigate = useNavigate();

    //useForm hook
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: "",
            description: "",
        },
    });



    //onSubmit function 
    const onSubmit = async (data) => {

        console.log(data); //form input data

        //post request
        const res = await doPostApi(data);

        //response for post request
        //console.log(res, "res in createform")

        //reset form to deafault
        reset();

        //navigate to read page
        navigate('/read')
    }

    return (
        <Box className='p-4 w-full h-[100vh]'>
            <Box className="">
                <h2 className='text-[25px] font-bold mb-4'>Create Todo</h2>
            </Box>
            <Box className=' '>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <Input
                                label='Task Title'
                                type='text'
                                placeholder='Enter your task title'
                                {...register('title', { required: true })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Input
                                label='Task Description'
                                type='text'
                                placeholder='Enter your task description'
                                {...register('description', { required: true })}
                            />
                        </Grid>
                    </Grid>
                    <Button type='submit' className='mx-auto mt-10 text-center cursor-pointer'>ADD</Button>
                </form>
            </Box>
            <div className="mt-6 w-[50%] ">
                <Link to='/read' className=' w-full'>
                    <button className='p-2 w-[40%] rounded-lg bg-red-600 text-white' >Dashboard</button>
                </Link>
            </div>
        </Box>
    )
}

export default Createform
