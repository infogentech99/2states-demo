
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {

    const testimonial = [
        {
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
        },

        {
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
        },


        {
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
        },

        {
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
        },


        {
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
        },


        {
            img: 'https://res.cloudinary.com/dpmceu66e/image/upload/v1762256798/blog-app/blogs/blogs/1762256795276-frame_338.png',
        },

    ]

    return (

        <div className="bg-[url('/assets/backmid.png')] bg-cover bg-no-repeat bg-[#1BB1BB]">
            <div className="lg:h-460 md:h-290 h-305">
                <h1 className="lg:text-4xl text-3xl text-center text-white lg:pt-42 pt-12">A message from the couple</h1>
                <h2 className="lg:text-2xl text-[16px] text-center text-white lg:pt-6 lg:px-60 px-6 lg:mt-28 mt-12">We are both so delighted that you are able to join us in celebrating what we hope will be one of the happiest days of our lives. The affection shown to us by so many people since our roka has been incredibly moving, and has touched us both deeply.
                    We would like to take this opportunity to thank everyone most sincerely for their kindness.
                    We are looking forward to see you at the wedding.</h2>
                <div className="mt-32 flex justify-center items-center">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop
                        centeredSlides
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        className="w-full py-12"
                    >
                        {testimonial.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full lg:h-[500px] h-50 object-cover rounded-[40px]"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>


<div className="flex flex-col-1 justify-center items-center mt-16">
                <div className="bg-[url('/assets/seap.png')] bg-cover bg-no-repeat lg:h-150 lg:w-150 h-95 w-95 md:h-120 md:w-120">
                <h1 className="lg:text-6xl text-3xl text-center text-white lg:pt-32 md:pt-32 pt-20">Looking <br/> forward to <br/>see you</h1>
                </div>
</div>
            </div>
        </div>

    );
}