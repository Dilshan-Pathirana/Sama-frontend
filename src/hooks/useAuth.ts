import { useState, useEffect } from 'react'
import { User } from '../types'

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedUser = localStorage.getItem('camrent_user')
            if (savedUser) {
                try {
                    const parsed = JSON.parse(savedUser)
                    setUser(parsed)
                    setIsAuthenticated(true)
                } catch (e) {
                    console.error('Failed to parse user', e)
                }
            }
        }
    }, [])

    const login = (email: string) => {
        // Mock login
        const mockUser: User = {
            id: 'u-123',
            name: 'Alex Photographer',
            email,
            role: email.includes('admin') ? 'admin' : 'user',
            avatar:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }

        setUser(mockUser)
        setIsAuthenticated(true)
        if (typeof window !== 'undefined') {
            localStorage.setItem('camrent_user', JSON.stringify(mockUser))
        }
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
        if (typeof window !== 'undefined') {
            localStorage.removeItem('camrent_user')
        }
    }

    const register = (name: string, email: string) => {
        const mockUser: User = {
            id: `u-${Math.random().toString(36).substr(2, 9)}`,
            name,
            email,
            role: 'user',
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=f59e0b&color=fff`,
        }

        setUser(mockUser)
        setIsAuthenticated(true)
        if (typeof window !== 'undefined') {
            localStorage.setItem('camrent_user', JSON.stringify(mockUser))
        }
    }

    return {
        user,
        isAuthenticated,
        login,
        logout,
        register,
    }
}
