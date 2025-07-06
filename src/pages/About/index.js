import React, { useState } from 'react';
import { Menu, X, Globe, Award, Users, Heart, MapPin, Plane, Camera, Star, CheckCircle, TrendingUp, Shield, Clock, Compass } from 'lucide-react';

export default function AboutPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const teamMembers = [
        {
            name: 'Sarah Chen',
            role: 'Founder & CEO',
            image: '👩‍💼',
            bio: 'Former travel journalist with 20+ years exploring 80+ countries',
            specialty: 'Sustainable Tourism'
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Head of Operations',
            image: '👨‍💻',
            bio: 'Ex-airline executive focused on seamless travel experiences',
            specialty: 'Logistics & Planning'
        },
        {
            name: 'Priya Patel',
            role: 'Cultural Experience Director',
            image: '👩‍🎨',
            bio: 'Anthropologist specializing in authentic cultural immersion',
            specialty: 'Cultural Tours'
        },
        {
            name: 'James Wilson',
            role: 'Adventure Travel Expert',
            image: '🧗‍♂️',
            bio: 'Professional mountaineer and extreme sports enthusiast',
            specialty: 'Adventure Travel'
        }
    ];

    const milestones = [
        {
            year: '2010',
            title: 'Company Founded',
            description: 'Started as a small boutique travel agency in New York'
        },
        {
            year: '2015',
            title: 'Digital Transformation',
            description: 'Launched our first online platform and mobile app'
        },
        {
            year: '2018',
            title: 'Global Expansion',
            description: 'Opened offices in London, Tokyo, and Sydney'
        },
        {
            year: '2020',
            title: 'Sustainable Travel Initiative',
            description: 'Committed to carbon-neutral travel options'
        },
        {
            year: '2023',
            title: 'AI-Powered Recommendations',
            description: 'Introduced personalized trip planning with AI'
        },
        {
            year: '2025',
            title: 'Community of 50K+ Travelers',
            description: 'Reached milestone of serving 50,000 happy customers'
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
                                About Wanderlust
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

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. Our mission is to make extraordinary travel experiences accessible to everyone, while promoting sustainable and responsible tourism practices.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Every journey we craft is designed to go beyond typical tourist experiences, offering authentic cultural connections and meaningful adventures that leave a positive impact on both travelers and the communities they visit.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-medium text-gray-700">Sustainable Travel</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-medium text-gray-700">Cultural Immersion</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-sm font-medium text-gray-700">Personalized Service</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-8xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                🌍
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                                ✈️
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These core principles guide everything we do and shape every travel experience we create.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our diverse team of travel experts brings together decades of experience and a shared passion for creating extraordinary journeys.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {member.image}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                    {member.specialty}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From humble beginnings to global recognition, here's how we've grown while staying true to our mission.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0">
                                            <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Create Your Story?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of travelers who have trusted us to create their perfect adventures. Let's write your next chapter together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                            <Plane className="h-5 w-5" />
                            <span>Start Planning</span>
                        </button>
                        <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white/20 flex items-center justify-center space-x-2">
                            <Camera className="h-5 w-5" />
                            <span>View Our Gallery</span>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}