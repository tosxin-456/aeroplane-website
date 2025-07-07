import React from 'react';
import {
    Users, MapPin, Award, Star,
    Heart, Shield, Compass, TrendingUp,
    Plane, CheckCircle, Clock
} from 'lucide-react';

export default function AboutPage() {

    const stats = [
        { number: '50K+', label: 'Happy Travelers', icon: Users },
        { number: '120+', label: 'Destinations', icon: MapPin },
        { number: '15+', label: 'Years Experience', icon: Award },
        { number: '98%', label: 'Satisfaction Rate', icon: Star }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Passion for Travel',
            description: 'We live and breathe travel. Our team consists of avid explorers who understand the transformative power of discovering new places.',
            gradient: 'from-rose-500 to-pink-600'
        },
        {
            icon: Shield,
            title: 'Trust & Reliability',
            description: 'Your peace of mind is our priority. We provide secure bookings, reliable service, and 24/7 support throughout your journey.',
            gradient: 'from-blue-500 to-indigo-600'
        },
        {
            icon: Compass,
            title: 'Expert Guidance',
            description: 'Our travel specialists have firsthand experience in every destination we offer, providing insider knowledge and personalized recommendations.',
            gradient: 'from-emerald-500 to-teal-600'
        },
        {
            icon: TrendingUp,
            title: 'Innovation',
            description: 'We continuously evolve our services, embracing new technologies and trends to enhance your travel planning experience.',
            gradient: 'from-purple-500 to-violet-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                            <Heart className="h-4 w-4 mr-2" />
                            Our Story
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                                About Airplane Site
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            For over 15 years, we've been turning travel dreams into unforgettable realities. Our passion for exploration and commitment to exceptional service has made us a trusted partner for adventurers worldwide.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <IconComponent className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Airplane Experience Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <Plane className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                        <h2 className="text-4xl font-bold text-gray-900">Your Flight Experience</h2>
                        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                            Flying with Airplane Site means comfort, convenience, and confidence. We partner with leading airlines to ensure smooth journeys from takeoff to landing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="flex items-start space-x-4">
                            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Seamless Booking</h4>
                                <p className="text-gray-600">Easily book flights through our platform with real-time availability and transparent pricing.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Clock className="text-yellow-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">On-Time Departures</h4>
                                <p className="text-gray-600">We work with airlines known for punctuality to get you where you’re going on time.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Shield className="text-blue-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Safety First</h4>
                                <p className="text-gray-600">Your safety is our priority, from secure check-ins to onboard health protocols.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Star className="text-purple-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">In-Flight Comfort</h4>
                                <p className="text-gray-600">Enjoy spacious seating, entertainment, and meals tailored to your preferences.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Compass className="text-teal-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Global Coverage</h4>
                                <p className="text-gray-600">Access over 120 destinations across 5 continents—all from one platform.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Users className="text-pink-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">Personalized Support</h4>
                                <p className="text-gray-600">Our support team is available 24/7 to assist you before, during, and after your flight.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
