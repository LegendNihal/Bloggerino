import Link from 'next/link'

function Sidebar() {
    return ( 
        <nav className='flex flex-col justify-evenly h-full'>
            <div className='mx-auto text-6xl'><Link href="/">Bloggerino</Link></div>
            

            <div className='flex flex-col justify-between content-center items-center gap-y-2'>
                <div><Link href="/blogs">Blogs</Link></div>
                <div><Link href="/create">Create</Link></div>
            </div>
        </nav>
     );
}

export default Sidebar;