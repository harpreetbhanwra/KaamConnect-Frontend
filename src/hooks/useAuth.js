import { useState, useCallback } from 'react'
import api from '../services/api'

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = useCallback(async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.post('/auth/login', { email, password })
      const { token, user: userData } = response.data
      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      return userData
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    setUser(null)
  }, [])

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  }
}
