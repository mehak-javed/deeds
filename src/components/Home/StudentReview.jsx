import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';
import user5 from '../../assets/images/user5.jpg';
import user6 from '../../assets/images/user6.jpg';



const reviews = [
  {
    name: 'Anoushay',
    location: 'Pakistan',
    message: 'I had an amazing experience with Deeds Consultancy. Their knowledge of UK universities and courses is impressive. They helped me choose the right path aligned with my goals.',
    image: user1,
  },
  {
    name: 'Roshan',
    location: 'Pakistan',
    message: 'As someone new to international education, I had no idea where to start. Deeds Consultancy simplified the entire process. I got my visa without any hassle.',
    image: user2,
  },
  {
    name: 'Waqas',
    location: 'Pakistan',
    message: 'Dear Deeds, I wanted to take a moment to express my gratitude for the incredible service you provided me during my admission. I Highly recommend them',
    image: user3,
  },
  {
    name: 'Gulnaz',
    location: 'Pakistan',
    message: 'I’m grateful to Deeds Consultancy for helping me secure admission in a top UK university. The documentation and interview prep were handled very professionally.',
    image: user4,
  },
  {
    name: 'Adina',
    location: 'Pakistan',
    message: 'I was confused about university selection and course options. The team at Deeds Consultancy patiently guided me through everything—from shortlisting universities to finalizing my visa. ',
    image: user5,
  },
  {
    name: 'Aqsa',
    location: 'Pakistan',
    message: 'Deeds Consultancy made my UK study visa process smooth and stress-free. Their counselors are very professional, friendly, and always available for queries. ',
    image: user6,
  },
];

export default function StudentReview() {
  return (
    <section className="py-12 bg-white mt-10 md:mt-0 lg:mt-0 xl:mt-0">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-themeClr2">
          Student's <span className="text-themeClr">Reviews</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          // Add a custom class to the Swiper container for easier targeting of its elements
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-full">
                <p className="text-gray-700 mb-4" data-aos="fade-up">{review.message}</p>
                <div className="flex flex-col items-center mt-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="mt-3 font-semibold text-blue-900">
                    {review.name}, {review.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}