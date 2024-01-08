import {getAllBlogs} from '../lib/fetch'
import { Suspense } from 'react'
import Loader from '../ui/Loader'
import Blogs from './Blogs'
import NoBlogs from './NoBlogs'

export const revalidate = 0

async function Page() {
    const blogs = await getAllBlogs()

    return ( 
        <div className="w-full h-full py-14 overflow-y-auto overflow-x-hidden ">
            <Suspense fallback={<Loader></Loader>}>
                {blogs.length === 0 ? <NoBlogs></NoBlogs> : <Blogs blogs={blogs}></Blogs>}
            </Suspense>
        </div>
     );
}

export default Page;