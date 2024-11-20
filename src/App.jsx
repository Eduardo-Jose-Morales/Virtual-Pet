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



  return (
    <>

    </>
  )
}

export default App
