'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '../../store/authStore'
import { validateEmail } from '../../utils/validate'

export default function LoginPage() {
  const router = useRouter()
  const login = useAuthStore((state) => state.login)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('All fields are required')
      setLoading(false)
      return
    }

    if (!validateEmail(email)) {
      setError('Invalid email format')
      setLoading(false)
      return
    }

    if (email === 'test@visionexdigital.com.au' && password === 'password123') {
      login()
      router.push('/dashboard')
    } else {
      setError('Incorrect email or password')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Room.me" className="h-6" />
            <span className="text-lg font-semibold">ROOM.ME</span>
          </div>

          <h2 className="text-3xl font-bold">Welcome back to Room.me!</h2>
          <p className="text-sm text-white/60">
            Room.me is an innovative video conference product that revolutionizes virtual meetings.
          </p>
          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 p-3 rounded hover:bg-violet-700 transition"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-black p-3 rounded hover:bg-gray-100 transition"
          >
            <img src="/google-icon.svg" alt="Google" className="h-5 w-5" />
            Sign in with Google
          </button>
          <div className="flex items-center justify-between text-sm text-white/60">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-violet-600" />
              <span>Remember for 30 days</span>
            </label>
            <a href="#" className="hover:underline text-violet-400">Forgot password</a>
          </div>
          <p className="text-sm text-white/60">
            Don’t have an account? <a href="#" className="underline text-white">Sign up</a>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 relative bg-gray-900">
        <img
          src="/testimonials.jpg"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end p-8">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg text-white max-w-md">
            <p className="text-lg leading-relaxed">
              “We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!”
            </p>
            <p className="mt-4 font-semibold">Sarah Markivoc - Project Manager</p>
            <div className="mt-2 flex space-x-2">
              <div className="h-1 w-8 bg-violet-400 rounded-full" />
              <div className="h-1 w-2 bg-white/50 rounded-full" />
              <div className="h-1 w-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}