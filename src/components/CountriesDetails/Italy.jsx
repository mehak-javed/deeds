import React from 'react';
import { MessageCircle } from 'lucide-react';
import FloatingWhatsapp from '../FloatingWhatsapp';
import BreadcrumCountries from './BreadcrumbCountries';

export default function Italy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumCountries />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Why Study In Italy?</h1>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Italy, the birthplace of the Renaissance and home to some of the world's oldest universities, offers an unparalleled educational experience steeped in history, culture, and innovation. With universities dating back to the 11th century, Italy combines centuries of academic excellence with cutting-edge research and modern teaching methodologies. Italian universities are renowned for programs in art, design, architecture, engineering, fashion, culinary arts, and business. Beyond academics, studying in Italy means immersing yourself in world-class art, cuisine, and lifestyle while being in the heart of Europe.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Top Universities in Italy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Italy boasts numerous prestigious universities that rank among Europe's finest institutions:
              <ul className='list-disc list-inside mt-2'>
                <li><b>University of Bologna</b> - The oldest university in the world (founded 1088)</li>
                <li><b>Sapienza University of Rome</b> - One of Europe's largest and most prestigious universities</li>
                <li><b>Politecnico di Milano</b> - Leading technical university for engineering and architecture</li>
                <li><b>University of Padua</b> - Historic institution known for science and medicine</li>
                <li><b>University of Milan</b> - Excellence in humanities, sciences, and medicine</li>
                <li><b>Politecnico di Torino</b> - Top engineering and architecture programs</li>
                <li><b>Bocconi University</b> - World-renowned for business and economics</li>
                <li><b>University of Pisa</b> - Strong in mathematics, physics, and computer science</li>
              </ul>
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Admission Requirements In Italy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Admission requirements for studying in Italy vary depending on the institution and program level. Here's a general overview for international students:
              <ul className='list-disc list-inside mt-2'>
                <li><b>Academic Qualifications:</b> High school diploma (minimum 12 years of education) for undergraduate programs; Bachelor's degree for Master's programs</li>
                <li><b>Pre-Enrollment Application:</b> Submit "Dichiarazione di Valore" or Statement of Value through Italian Embassy in your country</li>
                <li><b>Language Requirements:</b> Italian language proficiency (B1-B2 level) for Italian-taught programs; IELTS/TOEFL for English-taught programs</li>
                <li><b>Entrance Exams:</b> Some programs (especially Medicine, Architecture) require entrance examinations</li>
                <li><b>Academic Transcripts:</b> Official transcripts translated into Italian and legalized</li>
              </ul>
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Application Documents:</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To complete your application to Italian universities, prepare the following documents:
              <ul className='list-disc list-inside mt-2'>
                <li>Completed Application Form (through Universitaly portal)</li>
                <li>Official Academic Transcripts (translated and legalized)</li>
                <li>High School Diploma or Bachelor's Degree Certificate</li>
                <li>Declaration of Value (Dichiarazione di Valore)</li>
                <li>Language Proficiency Certificate (Italian or English)</li>
                <li>Valid Passport Copy</li>
                <li>Motivation Letter or Statement of Purpose</li>
                <li>Letters of Recommendation (2-3)</li>
                <li>CV/Resume</li>
                <li>Portfolio (for art, design, architecture programs)</li>
                <li>Financial Proof (bank statements)</li>
              </ul>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does It Cost to Study In Italy?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Italy offers surprisingly affordable education, especially at public universities. Public universities charge based on family income (ISEE calculation), with annual tuition ranging from €900 to €4,000 for EU students and €2,000 to €6,000 for non-EU students. Private universities are more expensive, with fees ranging from €6,000 to €20,000 per year depending on the institution and program. Programs taught in English at prestigious universities like Bocconi or Politecnico di Milano may have higher fees.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Living expenses in Italy vary significantly by location. Northern cities like Milan and Turin are more expensive, with monthly costs ranging from €900 to €1,500. Central Italy (Rome, Florence) costs approximately €800 to €1,200 monthly, while Southern cities (Naples, Palermo) are more affordable at €600 to €900 per month. These costs include accommodation, food, transportation, and personal expenses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            International students with valid study permits can work part-time up to 20 hours per week during the academic year and full-time during holidays. This provides opportunities to gain work experience while offsetting living expenses. Many students find part-time work in hospitality, tourism, language teaching, or student services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarships For International Students In Italy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Italy offers various scholarship opportunities for international students through government programs, universities, and regional authorities. The Italian Government Scholarships for Foreign Students cover tuition fees, health insurance, and provide monthly allowances. Many Italian universities also offer merit-based scholarships and tuition waivers based on academic excellence and financial need.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Regional scholarships (DSU - Diritto allo Studio Universitario) provide additional support including free or subsidized accommodation, meals, and monthly stipends for eligible students. The "Invest Your Talent in Italy" program specifically targets international students in engineering, economics, and management fields. Our consultants can guide you through the scholarship application process and help maximize your funding opportunities for studying in Italy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Study Work Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Italy offers attractive post-study work opportunities for international graduates. Upon graduation, non-EU students can convert their study visa to a job-seeking visa valid for up to 12 months. This allows graduates to search for employment and gain work experience in Italy without returning to their home country. During this period, graduates can work without restrictions while searching for positions matching their qualifications.
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Student Visa Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              International students from non-EU countries need a Type D National Student Visa (Visto Nazionale per Studenti) to study in Italy. The visa application must be submitted at the Italian Embassy or Consulate in your home country at least 3 months before your intended departure date.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Italy's diverse economy offers opportunities in fashion, design, automotive, engineering, food industry, tourism, and finance sectors. Cities like Milan, Rome, and Turin host numerous multinational companies and startups. Graduates who secure employment can apply for work permits and eventually permanent residence. Italy also offers special visa programs for entrepreneurs and self-employed professionals, making it an attractive destination for building international careers.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Key Visa Requirements:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <b>University Enrollment:</b> Official acceptance letter from an Italian university recognized by the Ministry of Education.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <b>Financial Proof:</b> Demonstrate sufficient funds (minimum €460.28 per month or approximately €5,500 per year) through bank statements, scholarship letters, or sponsorship documents.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <b>Accommodation Proof:</b> Confirmed housing arrangement in Italy (rental contract, university dormitory booking, or host family letter).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <b>Health Insurance:</b> Comprehensive health insurance valid in Italy for the entire duration of your stay (minimum €30,000 coverage).
            </p>
            <p className="text-gray-700 leading-relaxed">
              <b>Valid Passport:</b> Passport must be valid for at least 3 months beyond your intended stay, with at least two blank pages for visa stamps.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Schedule A Meeting With Us To Discuss Your Academic Endeavors
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you're contemplating your academic journey's complexities, Times Consultancy can be your guiding light. Our consultancy provides excellent counseling on optimal college and course selection while guiding you in selecting the perfect program and crafting a winning application. Whether you seek undergraduate studies in art and design, postgraduate studies in engineering, or specialized programs in fashion and culinary arts, Times Consultancy offers personalized support to help you unlock your potential in the heart of Renaissance Europe.
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