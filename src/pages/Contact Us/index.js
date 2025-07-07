import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones, Shield, Star, CheckCircle, Calendar, Users } from 'lucide-react';

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactMethods = [
        {
            icon: Phone,
            title: 'Call Us',
            info: '+1 (555) 123-4567',
            description: 'Speak directly with our travel experts',
            gradient: 'from-blue-500 to-indigo-600',
            bgGradient: 'from-blue-50 to-indigo-50'
        },
        {
            icon: Mail,
            title: 'Email Us',
            info: 'hello@EricAir.com',
            description: 'Get detailed responses to your questions',
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-50 to-emerald-50'
        },
        {
            icon: MessageCircle,
            title: 'Live Chat',
            info: 'Available 24/7',
            description: 'Instant support via our chat system',
            gradient: 'from-purple-500 to-pink-600',
            bgGradient: 'from-purple-50 to-pink-50'
        }
    ];

    const supportHours = [
        { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM EST' },
        { day: 'Saturday', hours: '9:00 AM - 8:00 PM EST' },
        { day: 'Sunday', hours: '10:00 AM - 6:00 PM EST' },
        { day: 'Emergency Support', hours: '24/7 Available' }
    ];

    const reasons = [
        {
            icon: Headphones,
            title: 'Expert Travel Advice',
            description: 'Get personalized recommendations from our experienced travel consultants'
        },
        {
            icon: Shield,
            title: 'Booking Protection',
            description: 'Secure your reservations with our comprehensive booking guarantee'
        },
        {
            icon: Star,
            title: 'Premium Service',
            description: 'Experience white-glove service that exceeds your expectations'
        },
        {
            icon: Users,
            title: 'Group Bookings',
            description: 'Special rates and coordination for family and corporate travel'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        We're Here to Help
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Get in Touch
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ready to plan your next adventure? Our travel experts are standing by to help you create unforgettable memories. Reach out and let's start planning your perfect trip.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => {
                            const IconComponent = method.icon;
                            return (
                                <div key={index} className={`group bg-gradient-to-br ${method.bgGradient} p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                                    <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                    <p className="text-lg font-semibold text-gray-700 mb-3">{method.info}</p>
                                    <p className="text-gray-600">{method.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                            {isSubmitted && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Trip Planning Assistance"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Tell us about your dream destination and travel preferences..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Contact Information & Support Hours */}
                        <div className="space-y-8">
                            {/* Support Hours */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Support Hours</h3>
                                </div>
                                <div className="space-y-4">
                                    {supportHours.map((schedule, index) => (
                                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                                            <span className="font-medium text-gray-700">{schedule.day}</span>
                                            <span className="text-gray-600">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Office Location */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Visit Our Office</h3>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-gray-600 font-medium">EricAir Travel Headquarters</p>
                                    <p className="text-gray-600">123 Adventure Boulevard<br />Suite 500<br />New York, NY 10001</p>
                                    <div className="pt-4">
                                        <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                                            Get Directions
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Contact Us */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Contact EricAir?</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        We're not just a booking platform – we're your travel partners dedicated to making every journey extraordinary.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => {
                            const IconComponent = reason.icon;
                            return (
                                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600 text-sm">{reason.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Don't wait – your dream destination is just a conversation away. Contact us today and let's make it happen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                            Call Now: +1 (555) 123-4567
                        </button>
                        <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white/20">
                            Start Live Chat
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}