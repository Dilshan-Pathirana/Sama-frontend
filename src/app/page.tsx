import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Truck, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EquipmentCard } from '@/components/equipment/EquipmentCard'
import { categories } from '@/data/categories'
import { equipment } from '@/data/equipment'

export default function HomePage() {
  const featuredEquipment = equipment.slice(0, 4)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000"
            alt="Camera Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-500 text-sm font-medium">
                Premium Cinema Equipment
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Execute <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">Cine Rental</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Elevate your production with Sri Lanka's premier cinema equipment rental house. Professional cameras, lighting, and grip for filmmakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/catalog">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Browse Equipment
                </Button>
              </Link>
              <Link href="/#how-it-works">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  How it Works
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-amber-500 mr-2" />
                5.0/5 Rating
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-amber-500 mr-2" />
                Fully Insured
              </div>
              <div className="flex items-center">
                <Truck className="w-4 h-4 text-amber-500 mr-2" />
                Island-wide Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Browse by Category
              </h2>
              <p className="text-slate-400">
                Find exactly what you need for your next production
              </p>
            </div>
            <Link
              href="/catalog"
              className="text-amber-500 hover:text-amber-400 font-medium hidden md:block"
            >
              View All Categories →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/catalog?category=${cat.id}`}
                className="group"
              >
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-amber-500/50 transition-all group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-medium text-white group-hover:text-amber-500 transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Featured Gear
              </h2>
              <p className="text-slate-400">
                Top rated equipment chosen by professionals
              </p>
            </div>
            <Link
              href="/catalog"
              className="text-amber-500 hover:text-amber-400 font-medium hidden md:block"
            >
              View All Equipment →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEquipment.map((item) => (
              <EquipmentCard key={item.id} equipment={item} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              How it Works
            </h2>
            <p className="text-slate-400">
              Renting cinema equipment has never been easier. We've streamlined the process so you can focus on creating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-900 via-amber-500/50 to-slate-900" />

            {[
              { title: 'Browse Gear', desc: 'Explore our extensive catalog of cameras, lenses, and lighting.', step: 1 },
              { title: 'Select Dates', desc: 'Choose your rental dates. Real-time availability checks.', step: 2 },
              { title: 'Book & Pay', desc: 'Secure checkout with instant booking confirmation.', step: 3 },
              { title: 'Shoot', desc: 'Get your gear delivered or pick it up. Create your masterpiece.', step: 4 },
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-24 h-24 bg-slate-900 border-4 border-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 mx-auto">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-amber-500">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Comprehensive Insurance
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Every rental is covered by our comprehensive damage protection
                plan. Shoot with peace of mind knowing you're protected.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Nationwide Delivery
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We ship anywhere in the country with expedited options
                available. Get your gear exactly when and where you need it.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                24/7 Expert Support
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Our team of professional photographers and filmmakers is
                available around the clock to help with any technical issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
