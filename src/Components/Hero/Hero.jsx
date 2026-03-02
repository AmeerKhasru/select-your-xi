import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'; // Assuming you have a bg image
import heroMain from '../../assets/logo.png';  // The main center image

const Hero = () => {
    return (
        <div className="max-w-[1200px] mx-auto mt-6 px-4 md:px-0">
            <div 
                className="hero min-h-[500px] rounded-3xl bg-black overflow-hidden"
                style={{
                    backgroundImage: `url(${bannerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl flex flex-col items-center">
                        {/* Main Banner Image */}
                        <img src={heroMain} alt="Main Banner" className="mb-6 w-48 md:w-64" />
                        
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h1>
                        <p className="mb-8 text-lg md:text-xl text-gray-400 font-medium">
                            Beyond Boundaries Beyond Limits
                        </p>
                        
                        {/* Interactive Button */}
                        <div className="outline outline-1 outline-yellow-400 outline-offset-4 rounded-xl">
                            <button className="btn bg-[#E7FE29] hover:bg-[#d4e924] text-black border-none font-bold px-6">
                                Claim Free Credit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;