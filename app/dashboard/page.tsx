'use client'

import { useRouter } from 'next/navigation'
import { useAuthStore } from '../../store/authStore'
import { useEffect } from 'react'

export default function DashboardPage() {
  const router = useRouter()
  const { isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) return null

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
      <h1 className="text-2xl font-bold mb-4">Welcome, you’re logged in.</h1>
      <button
        onClick={() => {
          logout()
          router.push('/login')
        }}
        className="bg-violet-600 px-6 py-3 rounded hover:bg-violet-700"
      >
        Logout
      </button>
    </div>
  )
}