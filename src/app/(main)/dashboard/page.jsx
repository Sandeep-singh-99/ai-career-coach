import React from 'react'
import { fetchUserOnBoardingData } from '../../../../actions/user'
import { redirect } from 'next/navigation'
import { getIndustryInsights } from '../../../../actions/dashboard'
import DashboardView from './_components/dashboard-view'

export default async function IndustryInsightsPage() {
     const {isOnboarded } = await fetchUserOnBoardingData()
     const insights = await getIndustryInsights()
    
      if (!isOnboarded) {
        redirect('/onboarding')
      }
  return (
    <div className='container mx-auto'>
      <DashboardView insights={insights} />
    </div>
  )
}
