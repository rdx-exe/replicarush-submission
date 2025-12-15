'use client';

import React from 'react';
import { Check, BarChart3 } from 'lucide-react';
import { poppins } from '../fonts';

export default function Services() {
  const features = [
    'Custom design solutions tailored to your brand',
    'Scalable and robust engineering architecture',
    'Real-time analytics and performance tracking',
    'Dedicated support and continuous optimization'
  ];

  return (
    <section className={`py-20 bg-zinc-100 ${poppins.variable}`} style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stop wrestling with <span className='text-purple-500'>legacy codebases</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              We deliver excellence through innovative design, robust engineering, and dedicated support to transform your vision into reality.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Graph */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <BarChart3 className="w-64 h-64 text-purple-600" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}