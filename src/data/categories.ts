import { Camera, Video, Zap, Mic, Plane, Package } from 'lucide-react'
import { Category } from '../types'

export const categories: {
    id: Category
    name: string
    icon: any
    description: string
}[] = [
        {
            id: 'Photography',
            name: 'Photography',
            icon: Camera,
            description: 'Professional DSLR and Mirrorless cameras for stills.',
        },
        {
            id: 'Video',
            name: 'Video Production',
            icon: Video,
            description: 'Cinema cameras and camcorders for high-end production.',
        },
        {
            id: 'Lighting',
            name: 'Lighting',
            icon: Zap,
            description: 'Studio strobes, continuous lights, and modifiers.',
        },
        {
            id: 'Audio',
            name: 'Audio',
            icon: Mic,
            description: 'Microphones, recorders, and mixers for crystal clear sound.',
        },
        {
            id: 'Drones',
            name: 'Drones & Aerial',
            icon: Plane,
            description: 'Professional drones for aerial cinematography.',
        },
        {
            id: 'Accessories',
            name: 'Accessories',
            icon: Package,
            description: 'Tripods, gimbals, batteries, and media cards.',
        },
    ]
