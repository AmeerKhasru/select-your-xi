import React from 'react';


const SelectedPlayers = ({ selectedPlayers, setActiveTab }) => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 my-10">
            <h2 className="text-2xl font-bold mb-6">Selected Players ({selectedPlayers.length}/6)</h2>
            
            <div className="flex flex-col gap-4">
                {selectedPlayers.map(player => (
                    <div key={player.playerId} className="flex justify-between items-center border p-4 rounded-xl shadow-sm bg-white">
                        <div className="flex items-center gap-4">
                            <img src={player.image} alt={player.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div>
                                <h3 className="font-bold text-lg">{player.name}</h3>
                                <p className="text-gray-500">{player.role}</p>
                                <p className="text-sm font-semibold">${player.biddingPrice}</p>
                            </div>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                             <i className="fa-solid fa-trash-can text-xl"></i>
                        </button>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => setActiveTab('available')}
                className="btn bg-[#E7FE29] mt-8 font-bold"
            >
                Add More Players
            </button>
        </div>
    );
};

export default SelectedPlayers;