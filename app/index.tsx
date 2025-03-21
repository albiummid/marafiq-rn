import Splash from '@/components/splash'
import { useAuthState } from '@/libs/global-state/store'
import { Redirect } from 'expo-router'
import React, { useEffect } from 'react'

export default function Index() {
  const {isLoading,checkAuth,isAuthenticated} = useAuthState()
  useEffect(() => {
    checkAuth()
  }
  , [])

  
  if(isLoading){
    return <Splash/>
  }else if(isAuthenticated){
    return <Redirect href={'/(tabs)/home'}/>
  }else{
    return <Redirect href={'/onboarding'}/>
  } 
}