import { useState, useEffect } from 'react';
import img1 from '../../assets/images/carousel-img1.jpg';
import img2 from '../../assets/images/carousel-img2.jpg';
import img3 from '../../assets/images/carousel-img3.jpg';
import img4 from '../../assets/images/carousel-img4.jpg';

const images = [
    { src: img1, alt: 'Featured Collection 1' },
    { src: img2, alt: 'Featured Collection 2' },
    { src: img3, alt: 'Featured Collection 3' },
    { src: img4, alt: 'Featured Collection 4' },
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
        };

        globalThis.addEventListener('keydown', handleKeyDown);
        return () => globalThis.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            goToNext();
        }

        if (touchStart - touchEnd < -75) {
            goToPrevious();
        }
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <div 
            className="relative w-full h-[calc(100vh-80px)] overflow-hidden group bg-black"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Images */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={image.src}
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                            index === currentIndex
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-105'
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover object-center select-none"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white md:opacity-0 opacity-70 group-hover:opacity-100 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Previous slide"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white md:opacity-0 opacity-70 group-hover:opacity-100 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Next slide"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 md:gap-3">
                {images.map((image, index) => (
                    <button
                        key={`indicator-${image.src}`}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentIndex
                                ? 'w-8 md:w-12 h-2 md:h-3 bg-white shadow-lg'
                                : 'w-2 md:w-3 h-2 md:h-3 bg-white/50 hover:bg-white/75 hover:scale-125'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-4 md:top-6 right-4 md:right-6 z-10 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-black/40 backdrop-blur-md text-white text-xs md:text-sm font-semibold border border-white/20 shadow-lg">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

export default Carousel;