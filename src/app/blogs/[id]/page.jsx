'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import hljs from 'highlight.js'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function BlogPage() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/view-blog?id=${id}`)
        const htmlResponse = await axios.get(response.data.markdownUrl)
        setBlog({ ...response.data, content: htmlResponse.data })
      } catch (err) {
        console.error(err)
        setError(err.message || 'An error occurred while fetching the blog post.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  useEffect(() => {
    if (blog?.content) {
      hljs.highlightAll()
    }
  }, [blog?.content])

  if (isLoading) {
    return <BlogSkeleton />
  }

  if (error) {
    return <ErrorAlert message={error} />
  }

  return (
    <>
      <div
        className=" bg-black w-full container mx-auto md:pt-36 pt-28 px-1"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      />
    </>
  )
}

function BlogSkeleton() {
  return (
    <div className="container mx-auto py-8 px-4 h-screen pt-36 bg-black w-full">
      <Card className="max-w-5xl mx-auto bg-black">
        <CardHeader>
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>
    </div>
  )
}

function ErrorAlert({ message }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  )
}

