import React from 'react';
import { MessageCircle } from 'lucide-react';
import FloatingWhatsapp from '../FloatingWhatsapp';
import BreadcrumCountries from './BreadcrumbCountries';

export default function UnitedKingdom() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumCountries />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why Study In The UK Section */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Why Study In The UK?</h1>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">World's Top Ranking Universities Located</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The UK is home to some of the world's oldest and most prestigious universities. Cities such as London, Edinburgh, Manchester, and Oxford offer a variety of universities across the UK, with highly ranked programs in various fields. The universities such as Oxford, Cambridge, and Imperial College London are always among the world's top 10.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Quality of Teaching</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Moreover, some of the world's most prestigious and ancient colleges are found in the United Kingdom. Whether this is true is uncertain. Also, universities must perform according to intense standards for academic quality, monitored by the Quality Assurance Agency for Higher Education, to maintain their government accreditation.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Research Opportunities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition, the UK is not lacking the way in international research and innovation. Students who work on innovative research will get access to state-of-the-art facilities. Additionally, the UK provides many chances to participate in academic conferences and study, which expands their horizons and adds significantly to their professional growth.
            </p>
          </div>
        </section>

        {/* Cost of Studying Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost of Studying in UK</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Cost of Degree programs abroad can be enough to not make you direct will determine the tuition cost. In the UK, there are numerous prestigious institutions and colleges, each with a unique cost Calendar. This is the breakdown price of education:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Study Program UK</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tuition Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Undergraduate bachelor's degree</td>
                  <td className="border border-gray-300 px-4 py-3">Between 10,400 and 26,000 GBP annually</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Master's degree for postgraduate study</td>
                  <td className="border border-gray-300 px-4 py-3">Between 10,600 and 22,100 GBP annually</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">A doctoral degree</td>
                  <td className="border border-gray-300 px-4 py-3">Between £13,000 to £50,000 annually</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Intakes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intakes in The UK</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the UK, colleges and universities provide two main intakes; however, many universities do offer autumn courses.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Intakes</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Intake/term intakes</td>
                  <td className="border border-gray-300 px-4 py-3">From September until December</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Springtime Intake</td>
                  <td className="border border-gray-300 px-4 py-3">January to April</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Summertime enrollment</td>
                  <td className="border border-gray-300 px-4 py-3">April to June</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Scholarships Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarships For International Students in UK</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Studying universities can be expensive for individuals. The UK provides a variety of scholarships for talented international students based on academic achievement and financial need. These scholarships are listed below.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Chevening Scholarships</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These prestigious awards, given out by the UK Foreign, Commonwealth, and Development Office (FCDO), provide one year of fully funded master's degree programmes available in the UK disciplines.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Scholarships From The Commonwealth For Developing Commonwealth Nations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These fellowships are open to students from developing Commonwealth nations for master's and PhD studies in various subjects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Almost all international students can apply for merit-based undergraduate and graduate scholarships from several UK universities. While, these scholarships cover all financial concerns and make just fee for any stay & tuition to the applicants. Additionally, numerous UK schools offer specific scholarships for students from particular nations or areas. These might include funding especially for Asian, African, or Latin American students.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Moreover, with the help of our online resources and our extensive relationships with UK universities, all qualified applicants can receive the scholarship that will most support their future.
            </p>
          </div>
        </section>

        {/* Student Visa Requirements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Visa Requirements in UK</h2>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Types Of Student Visas</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Short Term Study Visa: For short courses or English language programs.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Visa Application Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The visa application process involves submitting an online application, providing biometric information, and attending an interview. Furthermore, it's crucial to consult thoroughly and secure all documents are in order.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Required Documentation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Required documents typically include a valid passport, a confirmation of acceptance from from a UK institution, financial documents showing you can afford the costs, and mandatory documents are frequently also required.
            </p>
          </div>
        </section>

        {/* Post-Study Work Opportunities Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Study Work Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Graduate Route visa in the UK allows international graduates to work or find work at any level after graduating. Therefore, depending on the time level at which the student international graduates can apply for a PSW visa within the graduate route to continue living in the UK as a result of work or work after completing their degree abroad. While, compared to other work options, the PSW visa does not require a specific kind of work or income bracket. Additionally, PSW visa holders can switch to other UK visa categories after the completion of the PSW. Such as switching to switch into the Skilled Worker visa if they get a relevant job opportunity. However, in making this transfer easy, consult with experienced consultants with adequate training.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Schedule A Meeting With Us To Discuss Your Academic Endeavors
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether it you're contemplated to your academic journey's complexities, Times Consultancy can be your guiding light. The consultancy provides excellent counseling on the optimal college and course selection while also guiding you in selecting the perfect program to crafting a winning application. Whether you seek undergraduate studies, postgraduate studies, Times Consultancy offers personalized support to help you unlock your potential.
          </p>
          <a
            href="https://wa.me/971508187649?text=Hi%20there%2C%20I%20have%20a%20question!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-themeClr text-white px-8 py-3 rounded-full font-semibold hover:bg-themeClr2 transition flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>CHAT WITH US</span>
            </button>
          </a>
        </section>
      </div>

      <FloatingWhatsapp />
    </div>
  );
}