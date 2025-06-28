import React from 'react'
import { getResume } from '../../../../actions/resume'
import ResumeBuilder from './_components/resume-builder'

export default async function Resume() {
    const resume = await getResume()
  return (
    <div className='container mx-auto py-6'>
        <ResumeBuilder initialData={resume?.content}/>
    </div>
  )
}
