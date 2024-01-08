import { getBlog } from "../../../lib/fetch";
import { updateBlog } from "../../../lib/actions";

export default async function Page({params}) {
    const id = params.slug;
    const blog = await getBlog(id);

    const updateBlogWithID = updateBlog.bind(null,id);

    return (
        <div className="flex flex-col h-full justify-center items-center">
            <div className="w-1/2 text-center">
                <form action={updateBlogWithID}>
                    <div className="my-5">
                        <input type="text" name="by" value={blog.by} readOnly required className="w-full border-none bg-slate-100 border-gray-500 px-3 py-2" placeholder="By" />
                    </div>
                    <div className="my-5">
                        <input type="text" defaultValue={blog.title} name="title" required className="w-full border-none bg-gray-100 px-3 py-2" placeholder="Title" />
                    </div>
                    <div className="my-5">
                        <textarea name="body" defaultValue={blog.body} required id="" cols="30" rows="10" className="w-full resize-none border-none bg-slate-100 px-3 py-2" placeholder="Body"></textarea>
                    </div>
                    <button type="submit" className="bg-black text-white p-5">Post</button>
                </form>
            </div>
        </div>
    )
}