"use client"

import MDEditor from '@uiw/react-md-editor'
import React from 'react'

export default function CoverLetterPreview({ content }) {
  return (
    <div className='py-4'>
        <MDEditor value={content} preview='preview' height={700} />
    </div>
  )
}
