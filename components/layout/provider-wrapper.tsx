import { queryClient } from '@/libs/api-client'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { PropsWithChildren } from 'react'

export default function ProviderWrapper({children}:PropsWithChildren) {
  
  return (
    <>
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
    </>
  )
}