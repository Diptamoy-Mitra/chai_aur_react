import React, { useCallback, useEffect } from 'react'
import { Button, Input, RTE } from '../index'
import { useForm } from 'react-hook-form'
import appwriteService from '../../appwrite/config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'

        },
    })
    //for navigation
    const navigate = useNavigate();
    //user details
    const userData = useSelector((state) => state.auth.userData);

    // when form submit then run it
    const submit = async (data) => {
        //if post exist then update
        if (post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            //if post exist then want to delete old image
            if (file) {
                appwriteService.deleteFile(post.featuredImage); //deletes old image

            }

            //update post and send data to appwrite
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,


            })

            //navigate
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }


        }

        //create post new form
        else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;

                //call createpost
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })

                //navigate
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }

        }

    }

    //transform spaces with regex
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value.trim().toLowerCase().replace(/^[a-zA-Z\d\s]+/g, '-').replace(/\s/g, '-')
        }
        else {
            return ''
        }
    }, [])


    //use slugtransform this way in useEffect
    useEffect(() => {

        //continuously watch name and values of the form
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })

        //memory optimize
        return () => {
            subscription.unsubscribe()
        }


    }, [watch, slugTransform, setValue])


    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3 px-2'>
                <Input
                    label="Title: "
                    placeholder='Title'
                    className='mb-4'
                    {...register('title', {
                        required: true
                    })}
                />
                <Input
                    label="Slug: "
                    placeholder="Slug"
                    className='mb-4'
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTransform(e.currentTarget.value), {
                            shouldValidate: true
                        })
                    }

                    }
                />
                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues('content')}

                />

            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type='file'
                    className='mb-4'
                    accept='image/png, image/jpg, image/jpeg, image/gif'
                    {
                    ...register('image', { required: !post })
                    }
                />
                {
                    post && (
                        <div className="w-full mb-4">
                            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-lg' />
                        </div>
                    )
                }
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}

                />
                <Button type="submit" className='w-full' bgColor={post ? 'bg-green-500' : undefined}>{post ? 'Update' : 'Submit'}</Button>
            </div>
            <div>

            </div>

        </form>
    )
}

export default PostForm

//7:23:33