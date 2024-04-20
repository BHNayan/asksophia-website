import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VideoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const slides = [
    {
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
      thumbnailUrl: "./images/box-img-1.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      reviewer: "John Doe",
      rating: 5
    },
    {
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
      thumbnailUrl: "./images/box-img-1.png",
      testimonial: "Vestibulum aliquet odio in purus tincidunt vehicula.",
      reviewer: "Jane Smith",
      rating: 5
    },
    // Add more slides as needed
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="flex">
          <div className="w-1/2 relative">
            <iframe
              width="100%"
              height="180"
              src={slide.videoUrl}
              title="Video thumbnail"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            <img src={slide.thumbnailUrl} alt="Thumbnail" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>
          <div className="w-1/2">
            <div className="p-4">
              <p>{slide.testimonial}</p>
              <div className="flex items-center">
                <p>{slide.reviewer}</p>
                <div className="ml-2">
                  {[...Array(slide.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default VideoCarousel;
