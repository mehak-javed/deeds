import React, { useState } from 'react';

const UniversityList = () => {
  const [selectedCountry, setSelectedCountry] = useState('UK');

  const countries = [
    'UK', 'USA', 'POLAND', 'MALAYSIA', 'TURKEY', 'UAE', 'CANADA', 'AUSTRALIA', 'IRELAND'
  ];

  const universities = {
    UK: [
      {
        name: 'University of Strathclyde',
        logo: 'https://logo.clearbit.com/strath.ac.uk'
      },
      {
        name: 'Keele University',
        logo: 'https://logo.clearbit.com/keele.ac.uk'
      },
      {
        name: 'Staffordshire University',
        logo: 'https://logo.clearbit.com/staffs.ac.uk'
      },
      {
        name: 'Abertay University',
        logo: 'https://logo.clearbit.com/abertay.ac.uk'
      },
      {
        name: 'Leeds Trinity University',
        logo: 'https://logo.clearbit.com/leedstrinity.ac.uk'
      },
      {
        name: 'University College Birmingham',
        logo: 'https://logo.clearbit.com/ucb.ac.uk'
      },
      {
        name: 'Canterbury Christ Church University',
        logo: 'https://logo.clearbit.com/canterbury.ac.uk'
      },
      {
        name: 'University of Roehampton via OIEG',
        logo: 'https://logo.clearbit.com/roehampton.ac.uk'
      },
      {
        name: 'University of Ravensbourne via OIEG',
        logo: 'https://logo.clearbit.com/ravensbourne.ac.uk'
      },
      {
        name: 'University of East London',
        logo: 'https://logo.clearbit.com/uel.ac.uk'
      },
      {
        name: 'De Montfort University',
        logo: 'https://logo.clearbit.com/dmu.ac.uk'
      },
      {
        name: 'Buckinghamshire New University',
        logo: 'https://logo.clearbit.com/bucks.ac.uk'
      },
      {
        name: 'Glasgow Caledonian University',
        logo: 'https://logo.clearbit.com/gcu.ac.uk'
      },
      {
        name: 'Middlesex University',
        logo: 'https://logo.clearbit.com/mdx.ac.uk'
      },
      {
        name: 'Nottingham Trent University',
        logo: 'https://logo.clearbit.com/ntu.ac.uk'
      },
      {
        name: 'Ulster University QA',
        logo: 'https://logo.clearbit.com/ulster.ac.uk'
      },
      {
        name: 'Birmingham City University',
        logo: 'https://logo.clearbit.com/bcu.ac.uk'
      },
      {
        name: 'University of East Anglia',
        logo: 'https://logo.clearbit.com/uea.ac.uk'
      },
      {
        name: 'University Of Greenwich',
        logo: 'https://logo.clearbit.com/gre.ac.uk'
      },
      {
        name: 'University Of Hertfordshire',
        logo: 'https://logo.clearbit.com/herts.ac.uk'
      },
      {
        name: 'University Of Hull London',
        logo: 'https://logo.clearbit.com/hull.ac.uk'
      },
      {
        name: 'University of Law',
        logo: 'https://logo.clearbit.com/law.ac.uk'
      },
      {
        name: 'University of Wolverhampton',
        logo: 'https://logo.clearbit.com/wlv.ac.uk'
      }
    ],
    USA: [
      {
        name: 'Harvard University',
        logo: 'https://logo.clearbit.com/harvard.edu'
      },
      {
        name: 'MIT',
        logo: 'https://logo.clearbit.com/mit.edu'
      },
      {
        name: 'Stanford University',
        logo: 'https://logo.clearbit.com/stanford.edu'
      },
      {
        name: 'Yale University',
        logo: 'https://logo.clearbit.com/yale.edu'
      },
      {
        name: 'Princeton University',
        logo: 'https://logo.clearbit.com/princeton.edu'
      },
      {
        name: 'Columbia University',
        logo: 'https://logo.clearbit.com/columbia.edu'
      },
      {
        name: 'University of Chicago',
        logo: 'https://logo.clearbit.com/uchicago.edu'
      },
      {
        name: 'Cornell University',
        logo: 'https://logo.clearbit.com/cornell.edu'
      }
    ],
    POLAND: [
      {
        name: 'University of Warsaw',
        logo: 'https://logo.clearbit.com/uw.edu.pl'
      },
      {
        name: 'Jagiellonian University',
        logo: 'https://logo.clearbit.com/uj.edu.pl'
      },
      {
        name: 'Warsaw University of Technology',
        logo: 'https://logo.clearbit.com/pw.edu.pl'
      },
      {
        name: 'AGH University',
        logo: 'https://logo.clearbit.com/agh.edu.pl'
      },
      {
        name: 'Gdansk University of Technology',
        logo: 'https://logo.clearbit.com/pg.edu.pl'
      },
      {
        name: 'Adam Mickiewicz University',
        logo: 'https://logo.clearbit.com/amu.edu.pl'
      },
      {
        name: 'Wroclaw University of Technology',
        logo: 'https://logo.clearbit.com/pwr.edu.pl'
      },
      {
        name: 'Poznan University of Technology',
        logo: 'https://logo.clearbit.com/put.poznan.pl'
      }
    ],
    MALAYSIA: [
      {
        name: 'University of Malaya',
        logo: 'https://logo.clearbit.com/um.edu.my'
      },
      {
        name: 'Universiti Teknologi Malaysia',
        logo: 'https://logo.clearbit.com/utm.my'
      },
      {
        name: 'Universiti Putra Malaysia',
        logo: 'https://logo.clearbit.com/upm.edu.my'
      },
      {
        name: 'Universiti Kebangsaan Malaysia',
        logo: 'https://logo.clearbit.com/ukm.my'
      },
      {
        name: 'Universiti Sains Malaysia',
        logo: 'https://logo.clearbit.com/usm.my'
      },
      {
        name: 'Taylor\'s University',
        logo: 'https://logo.clearbit.com/taylors.edu.my'
      },
      {
        name: 'Monash University Malaysia',
        logo: 'https://logo.clearbit.com/monash.edu.my'
      },
      {
        name: 'UCSI University',
        logo: 'https://logo.clearbit.com/ucsiuniversity.edu.my'
      }
    ],
    TURKEY: [
      {
        name: 'Bogazici University',
        logo: 'https://logo.clearbit.com/boun.edu.tr'
      },
      {
        name: 'Middle East Technical University',
        logo: 'https://logo.clearbit.com/metu.edu.tr'
      },
      {
        name: 'Istanbul Technical University',
        logo: 'https://logo.clearbit.com/itu.edu.tr'
      },
      {
        name: 'Sabanci University',
        logo: 'https://logo.clearbit.com/sabanciuniv.edu'
      },
      {
        name: 'Koc University',
        logo: 'https://logo.clearbit.com/ku.edu.tr'
      },
      {
        name: 'Bilkent University',
        logo: 'https://logo.clearbit.com/bilkent.edu.tr'
      },
      {
        name: 'Istanbul University',
        logo: 'https://logo.clearbit.com/istanbul.edu.tr'
      },
      {
        name: 'Hacettepe University',
        logo: 'https://logo.clearbit.com/hacettepe.edu.tr'
      }
    ],
    UAE: [
      {
        name: 'American University of Sharjah',
        logo: 'https://logo.clearbit.com/aus.edu'
      },
      {
        name: 'UAE University',
        logo: 'https://logo.clearbit.com/uaeu.ac.ae'
      },
      {
        name: 'Khalifa University',
        logo: 'https://logo.clearbit.com/ku.ac.ae'
      },
      {
        name: 'Zayed University',
        logo: 'https://logo.clearbit.com/zu.ac.ae'
      },
      {
        name: 'American University of Dubai',
        logo: 'https://logo.clearbit.com/aud.edu'
      },
      {
        name: 'Abu Dhabi University',
        logo: 'https://logo.clearbit.com/adu.ac.ae'
      },
      {
        name: 'University of Dubai',
        logo: 'https://logo.clearbit.com/ud.ac.ae'
      },
      {
        name: 'Heriot-Watt University Dubai',
        logo: 'https://logo.clearbit.com/hw.ac.uk'
      }
    ],
    CANADA: [
      {
        name: 'University of Toronto',
        logo: 'https://logo.clearbit.com/utoronto.ca'
      },
      {
        name: 'McGill University',
        logo: 'https://logo.clearbit.com/mcgill.ca'
      },
      {
        name: 'University of British Columbia',
        logo: 'https://logo.clearbit.com/ubc.ca'
      },
      {
        name: 'University of Waterloo',
        logo: 'https://logo.clearbit.com/uwaterloo.ca'
      },
      {
        name: 'University of Alberta',
        logo: 'https://logo.clearbit.com/ualberta.ca'
      },
      {
        name: 'McMaster University',
        logo: 'https://logo.clearbit.com/mcmaster.ca'
      },
      {
        name: 'University of Montreal',
        logo: 'https://logo.clearbit.com/umontreal.ca'
      },
      {
        name: 'University of Calgary',
        logo: 'https://logo.clearbit.com/ucalgary.ca'
      }
    ],
    AUSTRALIA: [
      {
        name: 'University of Melbourne',
        logo: 'https://logo.clearbit.com/unimelb.edu.au'
      },
      {
        name: 'Australian National University',
        logo: 'https://logo.clearbit.com/anu.edu.au'
      },
      {
        name: 'University of Sydney',
        logo: 'https://logo.clearbit.com/sydney.edu.au'
      },
      {
        name: 'University of Queensland',
        logo: 'https://logo.clearbit.com/uq.edu.au'
      },
      {
        name: 'Monash University',
        logo: 'https://logo.clearbit.com/monash.edu'
      },
      {
        name: 'UNSW Sydney',
        logo: 'https://logo.clearbit.com/unsw.edu.au'
      },
      {
        name: 'University of Adelaide',
        logo: 'https://logo.clearbit.com/adelaide.edu.au'
      },
      {
        name: 'University of Western Australia',
        logo: 'https://logo.clearbit.com/uwa.edu.au'
      }
    ],
    IRELAND: [
      {
        name: 'Trinity College Dublin',
        logo: 'https://logo.clearbit.com/tcd.ie'
      },
      {
        name: 'University College Dublin',
        logo: 'https://logo.clearbit.com/ucd.ie'
      },
      {
        name: 'University of Galway',
        logo: 'https://logo.clearbit.com/universityofgalway.ie'
      },
      {
        name: 'University College Cork',
        logo: 'https://logo.clearbit.com/ucc.ie'
      },
      {
        name: 'Dublin City University',
        logo: 'https://logo.clearbit.com/dcu.ie'
      },
      {
        name: 'Maynooth University',
        logo: 'https://logo.clearbit.com/maynoothuniversity.ie'
      },
      {
        name: 'University of Limerick',
        logo: 'https://logo.clearbit.com/ul.ie'
      },
      {
        name: 'Technological University Dublin',
        logo: 'https://logo.clearbit.com/tudublin.ie'
      }
    ]
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured <span className="text-themeClr">Universities</span>
        </h2>

        {/* Country Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCountry === country
                ? 'bg-themeClr2 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:scale-102'
                }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6" data-aos="fade-up">
          {universities[selectedCountry].map((university, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:transform hover:scale-105"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x50?text=' + encodeURIComponent(university.name);
                  }}
                />
              </div>
              <h3 className="text-sm font-medium text-center text-gray-800 leading-tight">
                {university.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityList;