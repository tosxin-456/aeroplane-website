import React from 'react';
import {
    Shield, Plane, CheckCircle, Globe, Clock, Award
} from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800">

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        <Shield className="h-4 w-4 mr-2" />
                        Built on Trust
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                            Travel You Can Count On
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We're building a travel platform where reliability isn't just promised—it's guaranteed. Every booking, every detail, every journey backed by enterprise-grade technology.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                            <Shield className="w-6 h-6 mr-2 text-purple-600" />
                            Our Mission
                        </h2>
                        <p className="text-gray-600">
                            To deliver rock-solid travel experiences through cutting-edge technology and unwavering reliability. Every trip should work exactly as planned.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                            <Globe className="w-6 h-6 mr-2 text-blue-600" />
                            Our Vision
                        </h2>
                        <p className="text-gray-600">
                            A world where travelers never worry about bookings, cancellations, or changes—because they trust their travel platform completely.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Reliability Focus */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10">Why We're Different</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                        <div className="flex items-start space-x-4">
                            <CheckCircle className="w-6 h-6 mt-1 text-green-600" />
                            <div>
                                <h4 className="text-lg font-semibold">Guaranteed Accuracy</h4>
                                <p className="text-gray-600">Real-time data from airlines ensures your bookings are always confirmed and up-to-date.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Clock className="w-6 h-6 mt-1 text-blue-600" />
                            <div>
                                <h4 className="text-lg font-semibold">24/7 Reliability</h4>
                                <p className="text-gray-600">Enterprise-grade infrastructure means we're always on, always working, always there.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Award className="w-6 h-6 mt-1 text-amber-500" />
                            <div>
                                <h4 className="text-lg font-semibold">Industry Standards</h4>
                                <p className="text-gray-600">Built on proven travel technology trusted by airlines and booking platforms worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Technology */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Built on Trusted Technology</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        We partner with industry-leading travel infrastructure to ensure every booking is secure, every flight is real, and every journey goes exactly as planned.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Shield className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="font-semibold mb-2">Secure Bookings</h3>
                            <p className="text-gray-600 text-sm">Bank-level security and instant confirmations you can trust.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <Plane className="w-8 h-8 text-indigo-600 mb-4" />
                            <h3 className="font-semibold mb-2">Real-Time Data</h3>
                            <p className="text-gray-600 text-sm">Direct airline connections mean accurate prices and availability.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                            <h3 className="font-semibold mb-2">Proven Platform</h3>
                            <p className="text-gray-600 text-sm">Built on infrastructure that powers major travel companies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Launch</h2>
                    <p className="text-gray-700 mb-6">
                        We've spent months building a platform you can depend on. Now we're ready to prove that reliable travel booking doesn't have to be complicated.
                    </p>
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-lg">
                        Get Early Access
                    </button>
                </div>
            </section>
        </div>
    );
}