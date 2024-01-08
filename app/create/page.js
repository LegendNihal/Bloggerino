import { createBlog } from "../lib/actions";


function Page() {
    return ( 
        <div className="flex flex-col h-full justify-center items-center">
            <div className="w-1/2 text-center">
                <form action={createBlog}>
                    <div className="my-5">
                        <input type="text" name="by" required className="w-full border-none bg-slate-100 border-gray-500 px-3 py-2" placeholder="By" />
                    </div>
                    <div className="my-5">
                        <input type="text" name="title" required className="w-full border-none bg-gray-100 px-3 py-2" placeholder="Title" />
                    </div>
                    <div className="my-5">
                        <textarea name="body" required id="" cols="30" rows="10" className="w-full resize-none border-none bg-slate-100 px-3 py-2" placeholder="Body"></textarea>
                    </div>
                    <button type="submit" className="bg-black text-white p-5">Post</button>
                </form>
            </div>
        </div>
     );
}

export default Page;