import { cache } from 'react'
import 'server-only'
import prisma from './db'
 
 
export const getAllBlogs = cache(async () => {
  const blogs = await prisma.blog.findMany()
  return blogs
})


export const getBlog = cache(async (id) => {
  const blog = await prisma.blog.findUnique({
    where: {
      id: id
    }
  })
  return blog
})