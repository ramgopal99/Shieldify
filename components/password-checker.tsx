"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ShieldCheck, ShieldAlert, HelpCircle } from 'lucide-react'

export function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')
  const [strengthPercentage, setStrengthPercentage] = useState(0)

  const checkPassword = () => {
    let score = 0
    if (password.length >= 8) score += 10
    if (/[A-Z]/.test(password)) score += 10
    if (/[a-z]/.test(password)) score += 10
    if (/\d/.test(password)) score += 10
    if (/[@$!%*?&]/.test(password)) score += 20

    if (score < 40) {
      setStrength('Weak')
      setStrengthPercentage(score)
    } else if (score < 50) {
      setStrength('Medium')
      setStrengthPercentage(score)
    } else {
      setStrength('Strong')
      setStrengthPercentage(score)
    }
  }

  return (
    <Card className="shadow-lg border-4 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 dark:bg-gradient-to-b dark:from-slate-850 dark:to-slate-800">
      <CardHeader className="bg-gradient-to-r from-red-500 to-purple-600 text-white dark:from-red-600 dark:to-purple-700">
        <CardTitle className="flex items-center space-x-2">
          <ShieldCheck className="h-8 w-8 animate-pulse" />
          <span className="text-2xl font-extrabold tracking-wide">
            Bhayankar Password Checker
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-3">
          <label htmlFor="password" className="text-sm font-medium text-white dark:text-gray-200">
            Enter your password
          </label>
          <Input
            id="password"
            type="text"
            placeholder="Type a powerful password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-600 bg-gray-800 text-white focus:ring focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-100"
          />
        </div>
        <Button
          onClick={checkPassword}
          className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white text-lg font-bold tracking-wider transition-transform transform hover:scale-105"
        >
          Check Strength
        </Button>
        {strength && (
          <div className="space-y-4 mt-6">
            <div className={`flex items-center space-x-3 font-bold ${
              strength === 'Weak' ? 'text-red-500' :
              strength === 'Medium' ? 'text-yellow-400' : 'text-green-400'
            }`}>
              {strength === 'Weak' && <HelpCircle className="h-6 w-6 animate-bounce" />}
              {strength === 'Medium' && <ShieldAlert className="h-6 w-6 animate-pulse" />}
              {strength === 'Strong' && <ShieldCheck className="h-6 w-6 animate-spin" />}
              <span className="text-xl">Password Strength: {strength}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 dark:bg-gray-600">
              <div
                className={`h-4 rounded-full ${
                  strength === 'Weak' ? 'bg-red-500' :
                  strength === 'Medium' ? 'bg-yellow-400' : 'bg-green-400'
                }`}
                style={{ width: `${strengthPercentage}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
