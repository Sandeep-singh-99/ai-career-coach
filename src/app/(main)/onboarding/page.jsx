import React from 'react'
import { industries } from '../../../../data/industries'
import { fetchUserOnBoardingData } from '../../../../actions/user'
import { redirect } from 'next/navigation'
import OnBoardingForm from './_components/onboardingForm'

export default async function onboarding() {
  const {isOnboarded } = await fetchUserOnBoardingData()

  if (isOnboarded) {
    redirect('/dashboard')
  }
  return (
    <main>
      <OnBoardingForm industries={industries} />
    </main>
  )
}
