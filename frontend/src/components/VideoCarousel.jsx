import React, { useState, useEffect } from "react";

function VideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      videoUrl: "https://www.youtube.com/embed/SG3L91imRBc",
      thumbnailUrl: "./images/box-img-1.png", // Replace with actual thumbnail URL
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      reviewer: "John Doe",
      rating: 5
    },
    {
      videoUrl: "https://www.youtube.com/embed/Qpw8mJf9Ny8",
      thumbnailUrl: "./images/box-img-2.png", // Replace with actual thumbnail URL
      testimonial: "Vestibulum aliquet odio in purus tincidunt vehicula.",
      reviewer: "Jane Smith",
      rating: 5
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Adjust autoplay speed here (in milliseconds)
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="video-carousel">
      <div className="video-slider">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? "slide active" : "slide"}>
            <div className="thumbnail-container">
              <img src={slide.thumbnailUrl} alt="Thumbnail" onClick={() => setCurrentSlide(index)} />
              <button className="play-button" onClick={() => setCurrentSlide(index)}>
                <i className="fa fa-play"></i>
              </button>
            </div>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="testimonial-slider">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentSlide ? "testimonial active" : "testimonial"}>
            <p>{slide.testimonial}</p>
            <p>{slide.reviewer}</p>
            {[...Array(slide.rating)].map((_, i) => (
              <span key={i} className="text-yellow-500">&#9733;</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCarousel;
