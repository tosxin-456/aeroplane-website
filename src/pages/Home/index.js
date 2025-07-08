import React, { useState } from 'react';
import { Menu, X, Plane, Building, Train, MapPin, Star, Users, Shield } from 'lucide-react';
import flightImage from '../../assets/flight.jpeg'
import { useNavigate } from 'react-router-dom';

export default function TravelHomepage() {
const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-green-600">

            {/* Hero Section */}
            <section className="relative h-screen  flex items-center justify-center overflow-hidden bg-green-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-16">
                        {/* Text Content */}
                        <div className="relative z-10 text-center lg:text-left">
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Discover Your Next
                                <span className="block text-green-600 animate-pulse">
                                    Adventure
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                                Explore breathtaking destinations, create unforgettable memories, and experience the world like never before
                            </p>
                            <button
                                onClick={() => window.location.href = 'https://aeroplane-iota.vercel.app/'}
                                className="group bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                            >
                                <span className="flex items-center justify-center lg:justify-start">
                                    Get Started
                                    <MapPin className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                                </span>
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img
                                    src={`${flightImage}`}
                                    alt="Beautiful mountain landscape"
                                    className="w-full h-96 lg:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-green-900/20"></div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-green-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <div className="p-4 bg-green-600 rounded-full shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                                <Users className="h-12 w-12 text-white" />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Your Journey Starts Here
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            We're passionate about creating extraordinary travel experiences that connect you with the world's most incredible destinations.
                            Our expert team curates personalized adventures that transform the way you explore, ensuring every moment becomes a cherished memory.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need for the perfect journey, all in one place
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Plane,
                                title: 'Flights',
                                description: 'Discover amazing flight deals to destinations worldwide with our exclusive partnerships and real-time booking system.',
                                gradient: 'from-green-500 to-green-600',
                                bgGradient: 'from-green-50 to-green-100'
                            },
                            {
                                icon: Building,
                                title: 'Hotels',
                                description: 'From luxury resorts to boutique accommodations, find the perfect stay that matches your style and budget.',
                                gradient: 'from-green-600 to-green-700',
                                bgGradient: 'from-green-100 to-green-200'
                            },
                            {
                                icon: Train,
                                title: 'Trains',
                                description: 'Experience scenic railway journeys and high-speed connections across continents with comfort and convenience.',
                                gradient: 'from-green-400 to-green-500',
                                bgGradient: 'from-green-50 to-green-100'
                            }
                        ].map((service, index) => (
                            <div
                                key={service.title}
                                className={`group p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}
                            >
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-6 flex items-center text-sm font-medium text-gray-500">
                                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                    <span>Rated 4.9/5</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-green-600 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white/10 rounded-full animate-pulse"
                            style={{
                                width: `${20 + Math.random() * 60}px`,
                                height: `${20 + Math.random() * 60}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <Shield className="h-16 w-16 text-white mx-auto mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied travelers who trust us to make their dream destinations a reality
                    </p>
                    <button
                        onClick={() => window.location.href = 'https://aeroplane-iota.vercel.app/'}
                        className="group bg-white text-green-600 hover:text-green-700 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
                    >
                        <span className="flex items-center">
                            Book Now
                            <Plane className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                    </button>
                </div>
            </section>

        </div>
    );
}