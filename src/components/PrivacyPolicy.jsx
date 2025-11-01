import React, { useState } from 'react';
import { Shield, Lock, Eye, Users, FileText, Globe, Mail, ChevronDown, ChevronUp } from 'lucide-react';

export default function PrivacyPolicy() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const sections = [
        {
            id: 'info-collection',
            icon: <FileText className="w-6 h-6" />,
            title: 'Information We Collect',
            content: `We collect personal information that you voluntarily provide when using our student consultancy services, including:
      
• Personal details (name, date of birth, nationality, contact information)
• Academic records (transcripts, test scores, certificates)
• Financial information (for visa and scholarship applications)
• Passport and identification documents
• Language proficiency test results
• Statement of purpose and recommendation letters
• Communication records with our consultants

We collect this information to effectively assist you with university applications, visa processing, and study abroad guidance.`
        },
        {
            id: 'info-usage',
            icon: <Eye className="w-6 h-6" />,
            title: 'How We Use Your Information',
            content: `Your information is used exclusively for the following purposes:

• Processing university and college applications
• Assisting with visa applications and documentation
• Providing personalized education counseling
• Communicating updates about your application status
• Matching you with suitable universities and programs
• Facilitating scholarship applications
• Complying with legal and regulatory requirements
• Improving our services and user experience

We never use your personal information for unauthorized marketing or sell it to third parties.`
        },
        {
            id: 'data-sharing',
            icon: <Users className="w-6 h-6" />,
            title: 'Information Sharing',
            content: `We share your information only when necessary:

• With universities and educational institutions you apply to
• With visa authorities and immigration departments
• With scholarship providers and funding organizations
• With authorized testing agencies (for score reporting)
• With our trusted service providers (under strict confidentiality agreements)
• When required by law or legal proceedings

All third parties are carefully vetted and required to maintain the confidentiality and security of your data.`
        },
        {
            id: 'data-security',
            icon: <Lock className="w-6 h-6" />,
            title: 'Data Security',
            content: `We implement robust security measures to protect your information:

• SSL encryption for all data transmission
• Secure servers with restricted access
• Regular security audits and updates
• Staff training on data protection protocols
• Secure document storage systems
• Multi-factor authentication for account access
• Regular data backups

While we strive to protect your data, no method of transmission over the internet is 100% secure. We continuously work to enhance our security measures.`
        },
        {
            id: 'data-retention',
            icon: <FileText className="w-6 h-6" />,
            title: 'Data Retention',
            content: `We retain your personal information for the following periods:

• Active applications: Duration of the application process plus 2 years
• Completed applications: Up to 5 years for reference and support
• Financial records: As required by law (typically 7 years)
• Communication records: Up to 3 years

After the retention period, your data is securely deleted or anonymized. You may request early deletion of your data, subject to legal obligations.`
        },
        {
            id: 'your-rights',
            icon: <Shield className="w-6 h-6" />,
            title: 'Your Rights',
            content: `You have the following rights regarding your personal data:

• Access: Request copies of your personal information
• Rectification: Correct inaccurate or incomplete data
• Erasure: Request deletion of your data (subject to legal requirements)
• Restriction: Limit how we process your information
• Portability: Receive your data in a structured format
• Objection: Object to processing for certain purposes
• Withdraw consent: Revoke previously given consent

To exercise these rights, contact our Data Protection Officer using the details below.`
        },
        {
            id: 'international',
            icon: <Globe className="w-6 h-6" />,
            title: 'International Data Transfers',
            content: `As we work with universities worldwide, your information may be transferred internationally:

• We ensure adequate protection through standard contractual clauses
• Data transfers comply with GDPR and applicable data protection laws
• All receiving parties maintain equivalent security standards
• You will be informed of any international transfers

We prioritize your privacy regardless of where your data is processed.`
        },
        {
            id: 'cookies',
            icon: <Eye className="w-6 h-6" />,
            title: 'Cookies and Tracking',
            content: `Our website uses cookies and similar technologies:

• Essential cookies for website functionality
• Analytics cookies to improve user experience
• Preference cookies to remember your settings
• No third-party advertising cookies

You can control cookie preferences through your browser settings. Disabling certain cookies may limit website functionality.`
        }
    ];

    return (
        <div className="min-h-screen ">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 bg-center h-96 flex items-center justify-center text-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                        <Shield className="w-16 h-16 sm:w-20 sm:h-20 bg-themeClr rounded-lg" />
                    </div>
                    <h1 className="text-themeClr text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
                       <span className="text-white">Privacy</span>  Policy
                    </h1>
                    <p className="text-lg sm:text-xl text-center text-blue-100 max-w-2xl mx-auto">
                        Your privacy is our priority. Learn how we protect and handle your personal information.
                    </p>
                    <p className="text-sm text-center text-blue-200 mt-4">
                        Last Updated: October 9, 2025
                    </p>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-blue-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Our Privacy Policy</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        At our Student Consultancy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your data when you use our study abroad consulting services.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        By using our services, you agree to the collection and use of information in accordance with this policy. We encourage you to read this document carefully to understand our practices.
                    </p>
                </div>

                {/* Expandable Sections */}
                <div className="space-y-4">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
                       data-aos="fade-up" >
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors" 
                            >
                                <div className="flex items-center space-x-3 sm:space-x-4" >
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-themeClr rounded-lg flex items-center justify-center text-white">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                        {section.title}
                                    </h3>
                                </div>
                                <div className="flex-shrink-0 ml-2">
                                    {expandedSection === section.id ? (
                                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                                    )}
                                </div>
                            </button>

                            {expandedSection === section.id && (
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                    <div className="pl-0 sm:pl-16 pt-2 border-t border-gray-100">
                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line mt-4">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-8 bg-themeClr2 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
                    <div className="flex items-center justify-center mb-4">
                        <Mail className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    <h2 className="text-2xl text-themeClr sm:text-3xl font-bold text-center mb-4">
                        Questions About Your Privacy?
                    </h2>
                    <p className="text-center text-blue-100 mb-6 leading-relaxed">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please don't hesitate to contact us.
                    </p>
                    <div className="bg-themeClr rounded-xl p-4 sm:p-6 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4 text-sm sm:text-base">
                            <span className="font-semibold">Data Protection Officer:</span>
                            <div className="text-white transition-colors break-all">
                                lahore9@deedsconsultancy.co.uk
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                </div>
            </div>
        </div>
    );
}