import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import _ from 'lodash';

export default function LinkedInSlider() {
  const linkedInLinks = [
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7284433094869180417',
    'https://www.linkedin.com/embed/feed/update/urn:li:share:7283068956188315649',
    'https://www.linkedin.com/embed/feed/update/urn:li:share:7282282330281365505',
    'https://www.linkedin.com/embed/feed/update/urn:li:share:7281904847862288384',
    'https://www.linkedin.com/embed/feed/update/urn:li:share:7269206492879179776',
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7259786182824259584',
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7249637761857572864',
  ]
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slidesPerView, setSlidesPerView] = useState<any>(3); // Define the slides per view
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

    // Calculate the total number of "pages" (visible groups of slides)
    const totalPages = Math.ceil(linkedInLinks.length / slidesPerView);
      const handlePaginationClick = (index: number) => {
        if (sliderRef.current) {
          sliderRef.current.slideTo(index);
        }
    };
  return (
    
        <div className="max-w-[73rem] mx-auto py-32 relative">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="custom-prev absolute top-1/2 -left-16 transform -translate-y-1/2 text-white px-4 py-2 rounded z-10 hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-left fill-primary-color"
              viewBox="0 0 16 16"
            >
              <path
                
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="custom-next absolute top-1/2 -right-16 transform -translate-y-1/2  text-white px-4 py-2 rounded z-10 hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-right fill-primary-color"
              viewBox="0 0 16 16"
            >
              <path
                
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
          <Swiper
            pagination={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            // autoplay={{
            //   delay: 3500,
            //   disableOnInteraction: true,
            // }}
            // slidesPerView={3}
            // spaceBetween={30}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            onSwiper={(swiper) => {
              sliderRef.current = swiper;
              setSlidesPerView(swiper.params.slidesPerView);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            onInit={(swiper) => {
              // Attach refs to Swiper navigation buttons
              // Delayed assignment is needed because Swiper initializes before refs are ready
              if (swiper.params.navigation) {
                const navigation = swiper.params.navigation as any;
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {linkedInLinks.map((element) => {
              const postId = element.split(":").pop();
              const postUrl = element.replace("embed/feed", "feed");
              return (
                <SwiperSlide key={postId}
                >
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(postUrl,
                          "_blank"
                        );
                      }}
                      className="border border-[#2338523D] relative"
                    >
                      <div className='absolute top-0 left-0 w-full h-full bg-transparent z-10'
                      >

                      </div>
                      <iframe
                        src={element}
                        height="100%"
                        width="100%"
                        title="Embedded post"
                        className="min-h-[330px]"
                        scrolling='no'
                        frameBorder="0"
                      ></iframe>
                    </div>
                 
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* Custom Pagination */}
          <div
            style={{
              // display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
            className="flex md:hidden lg:hidden"
          >
            {Array.from({ length: totalPages + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: index === activeIndex ? "#1456a2" : "#d9d9d9",
                  margin: "0 5px",
                  border: "none",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      
  );
}
