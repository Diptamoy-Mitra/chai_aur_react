import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../common/Input';
import Button from '../common/Button';
import { doEditApi, doPostApi } from '../../utils/ApiConfig';
import { useNavigate } from 'react-router-dom';

function UpdateComponent() {
     
  //states and store data
    const [id, setId] = useState(localStorage.getItem('id'));
    const [title, setTitle] = useState(localStorage.getItem('title'));
    const [description, setDescription] = useState(localStorage.getItem('description'));

    
    const navigate=useNavigate(); //navigation 

  //useForm hook
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: title,
            description: description,
        },
    });

    //onSubmit function
    async function onSubmit(data) {
        
        //post req
        const res=await doEditApi(id,data);
        
        reset();
        localStorage.clear(); //clear local storage after update
        //navigate to read page
        navigate('/read')

       
     }


    return (
           <div className='p-4'>
            <Box className="">
                <h2 className='text-[25px] font-bold mb-4'>Update Todo</h2>
            </Box>
            <Box className=' '>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <Input
                                label='Task Title'
                                type='text'
                                placeholder='Edit your task title'
                                className='border-2 border-gray-400 p-2 w-full rounded-lg'
                                {...register('title', { required: true })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Input
                                label='Task Description'
                                type='text'
                                className='border-2 border-gray-400 p-2 w-full rounded-lg'
                                placeholder='Edit your task description'
                                {...register('description', { required: true })}
                            />
                        </Grid>
                    </Grid>
                    <Button type='submit' className='mx-auto mt-10 text-center cursor-pointer'>Update</Button>
                </form>
            </Box>
        </div>
    )
}

export default UpdateComponent
