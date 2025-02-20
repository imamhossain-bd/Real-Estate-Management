import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const testimonials = [
    {
        id: 1,
        name: "Johnson",
        role: "Client Of Company",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great",
        bg: "https://i.ibb.co.com/SDzrKH1S/testimonial-02.webp",
    },
    {
        id: 2,
        name: "Johnson",
        role: "Client Of Company",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        text: "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great",
        bg: "https://i.ibb.co.com/GB62ztj/testimonial-01.webp",
    },
    {
        id: 3,
        name: "Johnson",
        role: "Client Of Company",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great",
        bg: "https://i.ibb.co.com/b501YVfr/testimonial-03-1.webp",
    },
];

const OurClient = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
    };

    return (
        <div>
            <div className='px-52 w-full py-5 bg-[#f2f6f7]'>
                <div className='mt-8 ml-[6rem]'>
                    <p className='py-1 rounded-full text-center w-[120px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Testimonial</p>
                    <p className='text-3xl font-bold'>What Our Client Say?</p>
                    <p className='text-gray-600 mt-2'>Highlight the best of your properties by using the List Category shortcode.</p>
                    <hr className='mt-5 w-20 border-2 border-orange-700' />
                </div>
                <div className="max-w-6xl mx-auto py-12">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-4">
                                {/* Background Image Container */}
                                <div
                                    className="relative h-60 rounded-xl overflow-hidden"
                                    style={{
                                        backgroundImage: `url(${testimonial.bg})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>

                                {/* Testimonial Content - Moved OUTSIDE */}
                                <div className="relative -mt-40 mx-6 bg-white p-6 rounded-lg shadow-lg z-50">
                                    <div className="flex items-center space-x-4">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-red-500 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-600">{testimonial.text}</p>
                                    <div className="absolute top-2 right-4 text-3xl text-gray-300">“</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default OurClient;