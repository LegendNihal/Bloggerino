import Link from 'next/link'
import UpButton from '../ui/UpButton'

function Blogs({blogs}) {
    return ( 
        <div>
            {blogs.map((blog) => {
                return(
                    <div className='w-2/3 mx-auto my-5 shadow-lg hover:shadow-2xl' key={blog.id}>
                        <div className='p-9'>
                            <Link href={`/blogs/${blog.id}`}><h1 className='font-bold text-2xl mb-2'>{blog.title}</h1></Link>
                            <p>{blog.body.slice(0,175)}...</p>
                            <div className='flex flex-row justify-between items-center mt-2'>
                                <span>By : {blog.by}</span>
                                <UpButton id={blog.id}></UpButton>
                            </div>
                        </div>
                    </div>
                )
            } )}
        </div>
     );
}

export default Blogs;