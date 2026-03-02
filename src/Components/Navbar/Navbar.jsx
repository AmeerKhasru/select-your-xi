import React from 'react';
import navImg from '../../assets/banner-main.png';

const Navbar = ({ coins }) => {
    return (
        /* mx-auto centers the div; w-full is for mobile; max-w-[1200px] limits width on desktop */
        <div className="navbar w-full max-w-[1200px] mx-auto bg-base-100 shadow-sm px-4 md:px-0">
            
            <div className="flex-1">
                <img className='w-8 h-8 object-contain' src={navImg} alt="Navigation Banner" />
            </div>

            <div className="flex-none">
                {/* On mobile, you might want to hide the menu or use a dropdown. 
                    For now, I've added overflow-x-auto so it doesn't break on tiny screens.
                */}
                <ul className="menu menu-horizontal px-1 gap-2 flex-nowrap items-center">
                    <li className="hidden sm:inline-block"><a>Home</a></li>
                    <li className="hidden sm:inline-block"><a>Fixture</a></li>
                    <li className="hidden sm:inline-block"><a>Teams</a></li>
                    <li className="hidden sm:inline-block"><a>Schedules</a></li>
                    
                    {/* Coin Section */}
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1 ml-2">
                    <span className="font-bold text-sm md:text-base">{coins.toLocaleString()}</span>
                        <span className="text-gray-500 text-sm ">Coin</span>
                        <img src="https://img.icons8.com/color/48/null/coins.png" className="w-5 h-5" alt="coin-icon" />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;