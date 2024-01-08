"use server"


import prisma from './db'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBlog(formData) {
    const by = formData.get("by")
    const title = formData.get("title")
    const body = formData.get("body")

    await prisma.blog.create({
        data: {by,title,body}
    })
    revalidatePath('/blogs')
    redirect('/blogs')
    
}

export async function deleteBlog(id) {
    await prisma.blog.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/blogs')
    redirect('/blogs')
}

export async function updateBlog(id,formData) {
    const by = formData.get("by")
    const title = formData.get("title")
    const body = formData.get("body")

    await prisma.blog.update({
        where: {
            id: id
        },
        data: {by,title,body}
    })
    revalidatePath('/blogs')
    redirect('/blogs')
}