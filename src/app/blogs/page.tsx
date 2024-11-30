'use client'
import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import axios from 'axios'
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
// import { StarsBackground } from "@/components/ui/stars-background"
// import { ShootingStars } from "@/components/ui/shooting-stars"
import blogCover from "../assets/blog.png"
interface Blog {
  _id: string
  title: string
  shortDescription: string
  thumbnailUrl: string
}
export default function BlogListing() {
  const [blogs, setBlogs] = React.useState<Blog[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const getBlogs = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('/api/blogs')
      setBlogs(response.data)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch blogs. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }
  React.useEffect(() => {
    getBlogs()
  }, [])
  if (isLoading) {
    return <BlogListingSkeleton />
  }
  if (error) {
    return <ErrorMessage message={error} />
  }
  return (
    <>
      {/* <div>
        <Image
          src={blogCover}
          alt="Blogs"
          width={500}
          height={500}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div> */}
      <div className="relative">
        {/* Background stars */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* <StarsBackground /> */}
          {/* <ShootingStars /> */}
        </div>
        {/* Foreground content */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-36 md:p-28 md:pt-36 relative z-20">
          {blogs.map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}
function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-black"
    >
      <Card className="flex flex-col justify-between h-full bg-black">
        <div>
          <CardHeader className="p-0 bg-black">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={blog.thumbnailUrl}
                alt={blog.title}
                fill
                className="bg-black"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="line-clamp-2 mb-2">{blog.title}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-3">{blog.shortDescription}</p>
          </CardContent>
        </div>
        <CardFooter className="p-4 pt-0">
          <Button asChild variant="link" className="px-0">
            <Link href={`/blogs/${blog._id}`}>
              Read more <ArrowRight className="ml-0 mt-1 h-3 w-3" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
function BlogListingSkeleton() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 pt-36 md:p-28 p-2 relative z-20">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden flex flex-col justify-between h-full bg-black md:w-auto">
            <div>
              <CardHeader className="p-0">
                <AspectRatio ratio={16 / 9}>
                  <Skeleton className="h-full w-full" />
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </div>
            <CardFooter className="p-4 pt-0">
              <Skeleton className="h-9 w-28" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
function ErrorMessage({ message }: { message: string }) {
  return (
    <Card className="bg-destructive/15 border-destructive">
      <CardHeader>
        <CardTitle>Error</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{message}</p>
      </CardContent>
    </Card>
  )
}