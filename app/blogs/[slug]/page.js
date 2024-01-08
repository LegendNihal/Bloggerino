import {getBlog} from '../../lib/fetch'
import DelButton from '../../ui/DelButton'
import { Suspense } from 'react'
import SingleBlogLoader from '../../ui/SingleBlogLoader'

export const revalidate = 0

export default async function Page({ params }) {
    const blog = await getBlog(params.slug);
    return (
        <Suspense fallback={<SingleBlogLoader></SingleBlogLoader>}>
            <div className='w-full h-full overflow-x-hidden overflow-y-auto'>
                <div className='w-2/3 mx-auto m-20 p-10 text-center'>
                    <h1 className='font-bold text-4xl my-10'>{blog.title}</h1>
                    <span className='text-xl my-5 block'>By : {blog.by}</span>
                    <p className='text-md my-5'>{blog.body}</p>
                    <DelButton id={params.slug}></DelButton>
                </div>
            </div>
        </Suspense>
    )
}