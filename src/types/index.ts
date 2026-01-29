export type Category =
    | 'Photography'
    | 'Video'
    | 'Lighting'
    | 'Audio'
    | 'Drones'
    | 'Accessories'

export type Condition = 'New' | 'Excellent' | 'Good' | 'Fair'

export type AvailabilityStatus = 'Available' | 'Low Stock' | 'Out of Stock'

export interface Equipment {
    id: string
    name: string
    brand: string
    model: string
    category: Category
    description: string
    specs: Record<string, string>
    images: string[]
    dailyRate: number
    weeklyRate: number
    monthlyRate: number
    deposit: number
    condition: Condition
    rating: number
    reviewCount: number
    stock: number
    serialNumber?: string
    features: string[]
    includedItems: string[]
}

export interface CartItem extends Equipment {
    startDate: string // ISO date string
    endDate: string // ISO date string
    days: number
}

export interface User {
    id: string
    name: string
    email: string
    role: 'user' | 'admin'
    avatar?: string
}

export interface Booking {
    id: string
    userId: string
    items: CartItem[]
    status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled'
    totalAmount: number
    depositAmount: number
    startDate: string
    endDate: string
    createdAt: string
}

export interface Review {
    id: string
    userId: string
    userName: string
    equipmentId: string
    rating: number
    comment: string
    date: string
}
