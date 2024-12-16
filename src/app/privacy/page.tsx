"use client";

import React from 'react';

export default function page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 pt-40 pb-11">
      <div className="w-3/4 p-6 bg-neutral-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Privacy Policy</h1>
        
        <p className="text-white text-lg mb-4">
          At Allerbite, your privacy is of utmost importance to us. This privacy policy outlines the types of personal information we collect, how we use it, and the steps we take to protect your data.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">1. Information We Collect</h2>
        <p className="text-white mb-4">
          We collect the following types of information to provide you with a better experience:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li>Personal details such as name, and email address</li>
          <li>Health-related information (e.g., allergies, dietary preferences)</li>
          <li>Usage data including app interactions, session information, and preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="text-white mb-4">
          We use your information for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-white">
          <li>To personalize your experience and provide relevant recommendations</li>
          <li>To improve the functionality and performance of the app</li>
          <li>To communicate with you about updates, features, and promotions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">3. Data Security</h2>
        <p className="text-white mb-4">
          We take data security seriously. We use industry-standard encryption and secure protocols to protect your personal data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">4. Sharing Your Information</h2>
        <p className="text-white mb-4">
          We do not sell or rent your personal data to third parties. However, we may share information with trusted service providers for the purpose of improving the app and delivering services to you. These third parties are required to adhere to strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">5. Your Rights</h2>
        <p className="text-white mb-4">
          You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us at support@allerbite.com.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">6. Changes to This Privacy Policy</h2>
        <p className="text-white mb-4">
          We may update this privacy policy from time to time. Any changes will be reflected on this page, and the date of the most recent update will be displayed at the bottom.
        </p>

        <p className="text-white text-sm mt-6">
          Effective Date: [Insert Date]
        </p>
      </div>
    </div>
  );
}
