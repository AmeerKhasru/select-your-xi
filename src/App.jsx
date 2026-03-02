import { useState, Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers' // You will create this
import Hero from './Components/Hero/Hero'

// Move promise outside to avoid re-fetching on every render
const playersPromise = fetch('/Players.json').then(res => res.json());

function App() {
  // 1. State Management
  const [coins, setCoins] = useState(6000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState('available'); // 'available' or 'selected'

  // 2. Logic to add a player
  const handleSelectPlayer = (player) => {
    const isExist = selectedPlayers.find(p => p.playerId === player.playerId);

    if (isExist) {
      alert("Player already selected!");
    } else if (selectedPlayers.length >= 6) {
      alert("Team is full! Max 6 players.");
    } else if (player.biddingPrice > coins) {
      alert("Not enough coins to buy this player!");
    } else {
      setCoins(coins - player.biddingPrice);
      setSelectedPlayers([...selectedPlayers, player]);
      alert(`${player.name} added to your squad!`);
    }
  };

  // 3. Logic to remove a player
  const handleRemovePlayer = (id, price) => {
    const remaining = selectedPlayers.filter(p => p.playerId !== id);
    setSelectedPlayers(remaining);
    setCoins(coins + price); // Optional: give coins back
  };

  return (
    <>
      {/* Pass coins to Navbar so it updates in the UI */}
      <Navbar coins={coins} />
      
      <Hero />

      <main className="max-w-[1200px] mx-auto px-4">
        {/* Toggle Buttons */}
        <div className="flex justify-end gap-2 my-8">
          <button 
            onClick={() => setActiveTab('available')}
            className={`btn ${activeTab === 'available' ? 'bg-[#E7FE29] font-bold' : 'btn-outline'}`}
          >
            Available
          </button>
          <button 
            onClick={() => setActiveTab('selected')}
            className={`btn ${activeTab === 'selected' ? 'bg-[#E7FE29] font-bold' : 'btn-outline'}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>

        {/* Conditional Rendering */}
        {activeTab === 'available' ? (
          <Suspense fallback={<div className="text-center py-20">Loading players...</div>}>
            <AvailablePlayers 
              playersPromise={playersPromise} 
              handleSelectPlayer={handleSelectPlayer} 
            />
          </Suspense>
        ) : (
          <SelectedPlayers 
            selectedPlayers={selectedPlayers} 
            handleRemovePlayer={handleRemovePlayer}
            setActiveTab={setActiveTab}
          />
        )}
      </main>
    </>
  )
}

export default App