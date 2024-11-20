import { createSignal, createEffect } from 'solid-js'
import './App.css'

function App() {
  const [pet, setPet] = createSignal('🥚');
  const [hunger, setHunger] = createSignal(20);
  const [boredom, setBoredom] = createSignal(20);
  const [energy, setEnergy] = createSignal(100);
  const [age, setAge] = createSignal(20);
  const [isAlive, setIsAlive] = useState(true);
  const [message, setMesssage] = createSignal('Take care of your pet!');

  createEffect(() => {
    const interval = setInterval(() => {

      if (isAlive) {  
        setHunger(prev => Math.min(100, prev + 1));
        setBoredom(prev => Math.min(100, prev + 1));
        setEnergy(prev => Math.max(0, prev - 1));
        setAge(prev => prev + 1);
        updatePetState();
      }
    
    }, 2000);
    
    return () => clearInterval(interval);
  }
      
  return (
    <>

    </>
  )
}

export default App
