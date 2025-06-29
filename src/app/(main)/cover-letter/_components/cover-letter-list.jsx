"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'
import { deleteCoverLetter } from '../../../../../actions/cover-letter'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function CoverLetterList({ coverLetters }) {
    const router = useRouter()

    const handleDelete = async (id) => {
        try {
            await deleteCoverLetter(id)
            toast.success("Cover letter deleted successfully")
            router.refresh()
        } catch (error) {
            toast.error(error.message || "Failed to delete cover letter")
        }
    }

    if (!coverLetters?.length) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>No Cover Letters Found</CardTitle>
                    <CardDescription>
                        You haven't created any cover letters yet. Click the button above to create one.
                    </CardDescription>
                </CardHeader>
            </Card>
        );
    }
  return (
    <div>

    </div>
  )
}
