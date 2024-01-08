import {deleteBlog} from '../lib/actions'

const DelButton = ({id}) => {
    const deleteBlogWithID = deleteBlog.bind(null,id)
    return ( 
        <form action={deleteBlogWithID} className='my-10'>
            <button type="submit" className='bg-black text-white p-5'>Delete</button>
        </form>
     );
}
 
export default DelButton
