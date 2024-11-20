import React, { useState, useEffect } from 'react';

const VirtualPet: React.FC = () => {
  const [pet, setPet] = useState('🥚');
  const [hunger, setHunger] = useState(20);
  const [boredom, setBoredom] = useState(20);
  const [energy, setEnergy] = useState(100);
  const [age, setAge] = useState(0);
  const [isAlive, setIsAlive] = useState(true);
  const [message, setMessage] = useState('Take care of your pet!');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAlive) {
        setHunger(prev => Math.min(100, prev + 1));
        setBoredom(prev => Math.min(100, prev + 1));
        setEnergy(prev => Math.max(0, prev - 1));
        setAge(prev => prev + 1);
        updatePetState();
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isAlive]);

  const updatePetState = () => {
    if (hunger >= 100 || boredom >= 100 || energy <= 0) {
      setIsAlive(false);
      setPet('👻');
      setMessage('Your pet has passed away. Refresh to start over.');
    } else if (age === 10 && pet === '🥚') {
      setPet('🐣');
      setMessage('Your pet has hatched!');
    } else if (age === 30 && pet === '🐣') {
      setPet('🐥');
      setMessage('Your pet has grown!');
    }

    // Random events
    if (Math.random() < 0.1) {
      const events = [
        { emoji: '🍎', message: 'Found a snack!', hunger: -10, energy: 5 },
        { emoji: '🦋', message: 'Chased a butterfly!', boredom: -10, energy: -5 },
        { emoji: '💤', message: 'Took a quick nap.', energy: 15, boredom: 5 }
      ];
      const event = events[Math.floor(Math.random() * events.length)];
      setPet(event.emoji);
      setMessage(event.message);
      setHunger(prev => Math.max(0, Math.min(100, prev + (event.hunger || 0))));
      setBoredom(prev => Math.max(0, Math.min(100, prev + (event.boredom || 0))));
      setEnergy(prev => Math.max(0, Math.min(100, prev + (event.energy || 0))));
      setTimeout(() => {
        setPet(age >= 30 ? '🐥' : age >= 10 ? '🐣' : '🥚');
      }, 1000);
    }
  };

  const feed = () => {
    if (!isAlive) return;
    setHunger(prev => Math.max(0, prev - 15));
    setEnergy(prev => Math.min(100, prev + 5));
    setBoredom(prev => Math.min(100, prev + 5));
    setMessage('Yum yum!');
  };

  const play = () => {
    if (!isAlive) return;
    setBoredom(prev => Math.max(0, prev - 20));
    setHunger(prev => Math.min(100, prev + 5));
    setEnergy(prev => Math.max(0, prev - 15));
    setMessage('So fun!');
  };

  const sleep = () => {
    if (!isAlive) return;
    setEnergy(prev => Math.min(100, prev + 30));
    setHunger(prev => Math.min(100, prev + 10));
    setBoredom(prev => Math.min(100, prev + 15));
    setMessage('Sweet dreams!');
  };

  return (
    <div className="w-80 h-[28rem] bg-yellow-300 rounded-3xl p-5 shadow-lg flex flex-col justify-between font-mono">
      <div className="bg-green-200 border-4 border-gray-800 rounded-lg h-48 flex flex-col justify-around items-center p-2">
        <div className={`text-6xl ${isAlive ? 'animate-bounce' : ''}`}>{pet}</div>
        <div className="w-full space-y-2">
          <div className="flex items-center">
            <span className="w-20 text-sm">Hunger:</span>
            <div className="h-2 bg-red-400 rounded" style={{ width: `${hunger}%` }}></div>
          </div>
          <div className="flex items-center">
            <span className="w-20 text-sm">Boredom:</span>
            <div className="h-2 bg-blue-400 rounded" style={{ width: `${boredom}%` }}></div>
          </div>
          <div className="flex items-center">
            <span className="w-20 text-sm">Energy:</span>
            <div className="h-2 bg-yellow-400 rounded" style={{ width: `${energy}%` }}></div>
          </div>
        </div>
        <div className="text-sm text-center h-10">{message}</div>
      </div>
      <div className="flex justify-around">
        <button
          onClick={feed}
          disabled={!isAlive}
          className="bg-red-400 text-white rounded-full p-3 disabled:opacity-50 transition transform active:scale-95"
        >
          Feed
        </button>
        <button
          onClick={play}
          disabled={!isAlive}
          className="bg-blue-400 text-white rounded-full p-3 disabled:opacity-50 transition transform active:scale-95"
        >
          Play
        </button>
        <button
          onClick={sleep}
          disabled={!isAlive}
          className="bg-yellow-400 text-white rounded-full p-3 disabled:opacity-50 transition transform active:scale-95"
        >
          Sleep
        </button>
      </div>
    </div>
  );
};

export default VirtualPet;