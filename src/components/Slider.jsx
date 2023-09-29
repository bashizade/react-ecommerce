import { useEffect, useState } from "react";

const Slider = () => {
    const [numImage, setNumImage] = useState(1);
    const images = [
        { id: 1, url: "/images/slider/1.webp" },
        { id: 2, url: "/images/slider/2.webp" },
        { id: 3, url: "/images/slider/3.webp" },
        { id: 4, url: "/images/slider/5.webp" },
    ];

    const handleNextSlide = () => {
        if (numImage < images.length) {
            setNumImage(prev => prev + 1);
        }
    }

    const handlePrevSlide = () => {
        if (numImage > 1) {
            setNumImage(prev => prev - 1);
        }
    }


    return (
        <div className="w-full overflow-hidden rounded-xl my-4 relative">
            {images.map(image => (
                <div key={image.id} className={image.id != numImage ? "hidden" : ""}>
                    <img src={image.url} alt="slider-image" />
                </div>
            ))}

            <div className=" absolute left-4 top-[40%]">
                <button type="button" className="btn rounded-full bg-opacity-50 border-none" onClick={()=>handleNextSlide()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
            </div>
            <div className=" absolute right-4 top-[40%]">
                <button type="button" className="btn rounded-full bg-opacity-50 border-none" onClick={()=>handlePrevSlide()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Slider;