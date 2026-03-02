import React, { use } from 'react';

const AvailablePlayers = ({ playersPromise }) => {
    // React 19 'use' hook unwraps the promise directly.
    // It does NOT return a [state, setState] array.
    const players = use(playersPromise);

    return (
        <div className="max-w-[1200px] mx-auto px-4 my-10">
            <h2 className="text-2xl font-bold mb-6 text-black">Available Players</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map(player => (
                    <div key={player.playerId} className="card bg-base-100 shadow-xl border border-gray-100">
                        <figure className="px-4 pt-4">
                            <img 
                                src={player.image} 
                                alt={player.name} 
                                className="rounded-2xl w-full h-52 object-cover" 
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title font-bold text-xl">{player.name}</h3>
                            <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                                <span><i className="fa-solid fa-flag mr-1"></i> {player.country}</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-lg text-black font-medium">
                                    {player.role}
                                </span>
                            </div>
                            <div className="divider my-1"></div>
                            <div className="flex justify-between font-semibold text-sm">
                                <span>{player.battingType}</span>
                                <span className="text-gray-400">{player.bowlingType}</span>
                            </div>
                            <div className="card-actions justify-between items-center mt-4">
                                <span className="font-bold">Price: ${player.biddingPrice}</span>
                                <button className="btn btn-sm btn-outline hover:bg-[#E7FE29] hover:border-none hover:text-black">
                                    Choose Player
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailablePlayers;