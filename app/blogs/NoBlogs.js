import Link from 'next/link'

function NoBlogs() {
    return ( 
        <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
            <div className="text-3xl font-light">No Blogs Right Now</div>
            <div className='p-5 bg-black text-white'><Link href='/create'>Create</Link></div>
        </div>
     );
}

export default NoBlogs;