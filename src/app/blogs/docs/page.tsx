"use client"
import { ArrowRight } from 'lucide-react'
import React from 'react'

function Page() {
  return (
    <>
      <div>
        <h1 className='text-5xl text-black text-left pl-10 mt-20 font-bold'>A Guide for the People in Tech</h1>
        <p className='text-xl text-black text-left pl-10 mt-12'>
          Reading the docs is a great way to learn. It’s a great way to learn about a new technology, or a new programming language, or a new framework. We have designed this website so that you can develop the habit to read from the docs. In future, our attempt is to provide you guide with all videos so that you can learn directly from docs and get all information in one place. No need to make notes or write down anything. <br /><br />Just read the docs.
        </p>
      </div>
      <div className='mt-14 pl-10'>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => {
            window.location.href = "/blogs/docs/cpp?topicName=full"
          }}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Read about C++
            <ArrowRight className='ml-2' />
          </span>
        </button>
      </div>
    </>
  )
}

export default Page
