// testimonial slider data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'PromptPro Medium Subscriber',
    message:
      'I recently stumbled upon the PromptPro AI News & Tools Medium Blog and was thoroughly impressed. The insights and tools shared are invaluable for anyone in the AI field. Moreover, the design and user experience of the main PromptPro AI website is top-notch. It is evident that a lot of thought and expertise went into its creation. Highly recommend for anyone looking to delve deeper into AI and prompt engineering!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane',
    position: 'Gumroad.com Customer Review',
    message:
      'The Ultimate Guide to LLM Prompt Engineering eBook is a game-changer. It offers a deep dive into prompt engineering making complex concepts easy to grasp. I have also had the pleasure of using some of the custom-crafted prompts from Prompt Digital Products, and they are nothing short of brilliant. Kudos to the team behind these incredible resources!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jordan L.',
    position: 'Startup Chief Marketing Officer',
    message:
      'The logo design I received from Zach aka PixelPix was nothing short of exceptional. It perfectly encapsulates our brands ethos and stands out in a crowded marketplace. The attention to detail, creativity, and understanding of our vision was evident in the final design. I have received countless compliments on our logo, and it is all thanks to their unparalleled design expertise. Highly recommended for anyone seeking a memorable and impactful brand identity!',

  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-center'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
