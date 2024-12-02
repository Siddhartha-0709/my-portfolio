"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import animation from '@/app/assets/docs/animations/163d0d67-749b-460e-9aa9-a749aae4e032.json'
function page() {
  return (
    <>
      <div className='h-screen py-32 bg-slate-900'>
        <div className='grid grid-cols-2'>
          <div>
            <h1 className='text-5xl text-white text-left pl-10 mt-32 font-bold'>Welcome to Docs by Siddhartha</h1>
            <p className='text-xl text-white text-left pl-10 mt-4'>Next-gen documentation that builds reading habits into your workflow.</p>
            <div className='mt-14 pl-10'>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onClick={() => {
                  window.location.href = "/blogs/docs"
                }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Check out the Docs
                  <ArrowRight className='ml-2' />
                </span>
              </button>
            </div>
          </div>
          <div className='px-10'>
          <iframe width="100%" height="150%" src="https://lottie.host/embed/e5174920-ea1c-4c50-b501-43e3d2bb39f1/UoqBvw88G3.lottie"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default page