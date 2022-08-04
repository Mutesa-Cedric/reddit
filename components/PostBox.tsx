import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { PhotographIcon, LinkIcon } from '@heroicons/react/outline'
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../graphql/mutations';

type Inputs = {
    postTitle: string,
    postBody: string,
    postImage: string,
    subReddit: string
};

function PostBox() {
    const { data: session } = useSession();
    const [addPost] = useMutation(ADD_POST);
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();
    // const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const onSubmit = handleSubmit(async (formData) => {
        console.log(formData);
        try {

        } catch (error) {

        }

    })
    const [imageBoxOpen, setImageBoxOpen] = useState<Boolean>(false);
    return (
        <form onSubmit={onSubmit} className="sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2">
            <div className="flex items-center space-x-3">
                <Avatar />
                <input
                    {...register('postTitle', { required: true })}
                    className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
                    disabled={!session}
                    type="text" placeholder={session ? 'create a post' : 'sign in to create a post '} />
                <PhotographIcon onClick={() => setImageBoxOpen(!imageBoxOpen)} className={`h-6 text-gray-300 cursor-pointer ${imageBoxOpen && 'text-blue-300'}`} />
                <LinkIcon className='h-6 text-gray-300 cursor-pointer' />
            </div>
            {watch('postTitle') && (
                <div className="flex flex-col py-2">
                    {/* body */}
                    <div className="flex items-center px-2">
                        <p className='min-w-[90px]'>Body</p>
                        <input
                            className='m-2 flex-1 bg-blue-50'
                            type="text" placeholder='Text (Optional)'
                            {...register('postBody')} />
                    </div>
                    <div className="flex items-center px-2">
                        <p className='min-w-[90px]'>Subredit</p>
                        <input
                            className='m-2 flex-1 bg-blue-50'
                            type="text" placeholder='i.e nextjs'
                            {...register('subReddit', { required: true })} />
                    </div>
                    {
                        imageBoxOpen &&
                        <div className="flex items-center px-2">
                            <p className='min-w-[90px]'>Image URL</p>
                            <input
                                className='m-2 flex-1 bg-blue-50'
                                type="text" placeholder='Optional'
                                {...register('postImage')} />
                        </div>
                    }
                    {/* Erros */}
                    {Object.keys(errors).length > 0 && (
                        <div className=' space-y-2 p-2 text-red-500'>
                            {errors.postTitle?.type === 'required' && (
                                <p>A post title is required</p>
                            )}
                            {errors.subReddit?.type === 'required' && (
                                <p>A subreddit is required</p>
                            )}
                        </div>
                    )}
                    {watch('postTitle') && (
                        <button type='submit' className='w-full rounded-full bg-blue-400 p-2 text-white'> Create Post</button>
                    )}
                </div>
            )}
        </form>
    )
}

export default PostBox