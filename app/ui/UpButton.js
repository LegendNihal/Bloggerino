import Link from "next/link";

const UpButton = ({id}) => {
    return ( 
        <Link href={`/blogs/${id}/edit`}>
            <button type="submit" className='bg-black text-white py-1 px-3'>Edit</button>
        </Link>
     );
}
 
export default UpButton;