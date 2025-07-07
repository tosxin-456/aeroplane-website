import React, { useState } from 'react';
import { Menu, X, Globe, Plane, Building, Car, Smartphone, MapPin, Package, Shield, Clock, DollarSign, Headphones, CheckCircle, Star, Award, Users, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import plane from '../../assets/airplane.jpeg'

export default function ServicesPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const coreServices = [
        {
            icon: Plane,
            title: 'Flight Bookings',
            description: 'Compare prices from 500+ airlines and book the best deals. Get instant confirmations and exclusive discounts.',
            features: ['Price comparison across 500+ airlines', 'Instant booking confirmation', 'Flexible date options',],
            gradient: 'from-blue-500 to-indigo-600',
            bgGradient: 'from-blue-50 to-indigo-50',
            popular: true
        },
        {
            icon: Building,
            title: 'Hotel Reservations',
            description: 'From budget-friendly hostels to luxury resorts, find the perfect accommodation for every traveler.',
            features: ['3M+ properties worldwide', 'Best price guarantee', 'Free cancellation options', 'Verified guest reviews'],
            gradient: 'from-emerald-500 to-green-600',
            bgGradient: 'from-emerald-50 to-green-50',
            popular: false
        },
        {
            icon: Package,
            title: 'Package Deals',
            description: 'Save more with bundled packages. Book flights, hotels, and activities together for the best value.',
            features: ['Save up to 30% on bundles', 'Coordinated bookings', 'Single payment process', 'Group discounts available'],
            gradient: 'from-amber-500 to-yellow-600',
            bgGradient: 'from-amber-50 to-yellow-50',
            popular: true
        }
    ];

    const whyChooseUs = [
        {
            icon: DollarSign,
            title: 'Price Match Guarantee',
            description: 'Found a lower price elsewhere? We\'ll match it and give you an extra 5% off.',
            color: 'text-green-600'
        },
        {
            icon: Clock,
            title: 'Easy Booking Process',
            description: 'Book in under 3 minutes with our streamlined, user-friendly booking system.',
            color: 'text-blue-600'
        },
        {
            icon: Headphones,
            title: '24/7 Customer Support',
            description: 'Our travel experts are available around the clock to assist you.',
            color: 'text-purple-600'
        },
        {
            icon: Shield,
            title: 'Secure Payments',
            description: 'Your data is protected with bank-level security and fraud protection.',
            color: 'text-red-600'
        },
        {
            icon: Award,
            title: 'Award-Winning Service',
            description: 'Recognized as "Best Travel Platform 2024" by Travel Weekly.',
            color: 'text-amber-600'
        },
        {
            icon: Users,
            title: 'Trusted by Millions',
            description: 'Join over 2 million satisfied travelers who choose Airplane Site.',
            color: 'text-indigo-600'
        }
    ];

    const optionalExtras = [
        {
            title: 'Travel Insurance',
            description: 'Comprehensive coverage for medical emergencies, trip cancellations, and lost luggage.',
            price: 'From $12/trip'
        },
        {
            title: 'Visa Support',
            description: 'Expert assistance with visa applications and documentation for hassle-free travel.',
            price: 'From $49/application'
        },
        {
            title: 'Travel Advisories',
            description: 'Real-time updates on safety, weather, and travel conditions for your destinations.',
            price: 'Free with booking'
        },
        {
            title: 'Airport Transfers',
            description: 'Convenient and reliable transportation from airports to your accommodation.',
            price: 'From $25/transfer'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">

            {/* Hero Section */}
            <section
                className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${plane})`, // Replace with actual path
                }}
            >
                {/* Optional overlay to make text more readable */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-emerald-900/60 to-teal-900/70 z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                            🌟 Comprehensive Travel Solutions
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Our Services
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                            From booking flights to crafting personalized itineraries, Airplane Site provides everything you need
                            to turn your travel dreams into unforgettable experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group bg-white text-green-600 hover:text-green-700 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <span className="flex items-center">
                                    Get Started Today
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </span>
                            </button>

                            <button className="group bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-green-600">
                                <span className="flex items-center">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Us Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                            CORE SERVICES
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Everything You Need
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive travel services designed to make your journey seamless from start to finish
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {coreServices.map((service, index) => (
                            <div
                                key={service.title}
                                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`}
                            >
                                {service.popular && (
                                    <div className="absolute -top-3 -right-3">
                                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full bg-white/80 hover:bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg group-hover:shadow-xl">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                            WHY CHOOSE US
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            The Airplane Site Advantage
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover why millions of travelers trust us with their most important journeys
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                <div className={`inline-flex p-3 rounded-xl bg-gray-50 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '2M+', label: 'Happy Travelers' },
                            { number: '150+', label: 'Countries Covered' },
                            { number: '4.9★', label: 'Average Rating' },
                            { number: '24/7', label: 'Customer Support' }
                        ].map((stat, index) => (
                            <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Optional Extras */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                            OPTIONAL EXTRAS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Additional Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Enhance your travel experience with our premium add-on services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {optionalExtras.map((extra, index) => (
                            <div
                                key={extra.title}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-green-200"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {extra.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {extra.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-green-600 font-bold text-sm">
                                        {extra.price}
                                    </span>
                                    <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
                                        Add to Trip
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white/10 rounded-full animate-pulse"
                            style={{
                                width: `${8 + Math.random() * 24}px`,
                                height: `${8 + Math.random() * 24}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your Adventure?
                    </h2>

                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let our travel experts help you plan the perfect trip. Get started with a free consultation today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group bg-white text-green-600 hover:text-green-700 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                            <span className="flex items-center">
                                Book Consultation
                                <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                        </button>

                        <button className="group bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-green-600">
                            <span className="flex items-center">
                                <Mail className="mr-2 h-5 w-5" />
                                Get Quote
                            </span>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}