import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How can I book a flight?',
            answer:
                'You can easily book a flight by selecting your departure and destination cities, travel dates, and the number of travelers. Click "Search" to compare flights and proceed to book.',
        },
        {
            question: 'Can I cancel or change my booking?',
            answer:
                'Yes. Most bookings are flexible, but cancellation/change policies depend on the airline or provider. Check your booking confirmation or contact our support team.',
        },
        {
            question: 'Do you offer group discounts?',
            answer:
                'Absolutely! We offer special deals for groups of 5 or more travelers. Contact us for a custom quote.',
        },
        {
            question: 'Is my payment information secure?',
            answer:
                'Yes, all transactions are encrypted using bank-level SSL security. We also offer fraud protection for added peace of mind.',
        },
        {
            question: 'Do I need travel insurance?',
            answer:
                'We highly recommend travel insurance to protect against unforeseen events like cancellations, medical emergencies, or lost luggage.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                        <HelpCircle className="w-5 h-5 mr-2" />
                        FREQUENTLY ASKED QUESTIONS
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How can we help you?
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Find answers to the most common questions about our travel services.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all"
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-green-600" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
