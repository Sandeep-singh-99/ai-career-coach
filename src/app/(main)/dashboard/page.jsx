import React from 'react'
import { fetchUserOnBoardingData } from '../../../../actions/user'
import { redirect } from 'next/navigation'

export default async function IndustryInsightsPage() {
     const {isOnboarded } = await fetchUserOnBoardingData()
    
      if (!isOnboarded) {
        redirect('/onboarding')
      }
  return (
    <div>Indus</div>
  )
}
