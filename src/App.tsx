import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './Timer'
import Resource from './Resource'

// structs
interface appProps {

}

interface resourceState {
  name: string;
  delta: number;
  amount: number;
}

function App(props: appProps) {
  function update() {
    updateResourceDeltas();
    updateResourceAmounts();
  }

  function updateResourceAmounts() {
    setLabour({...labour, amount: labour.delta + labour.amount});
    setRock({...rock, amount: rock.delta + rock.amount});
    setWood({...wood, amount: wood.delta + wood.amount});
    setIron({...iron, amount: iron.delta + iron.amount});
  }

  //placeholder for when i actually implement changing delta
  function updateResourceDeltas() {
    setLabour({...labour, delta: labour.delta});
    console.log("updated delta"); //debugging
  }

  //initialise resource state
  const [labour, setLabour] = useState<resourceState>({name: "labour", delta: 1, amount: 0});
  const [rock, setRock] = useState<resourceState>({name: "rock", delta: 1.1, amount: 0});
  const [wood, setWood] = useState<resourceState>({name: "wood", delta: 0, amount: 0});
  const [iron, setIron] = useState<resourceState>({name: "iron", delta: 0, amount: 0});

  return ( 
  <div>
    <div>
      <div>
        <Resource name = {labour.name} amount = {labour.amount}></Resource>
        {labour.delta /*debugging*/}
      </div>
      <div>
        <Resource name = {rock.name} amount = {rock.amount}></Resource>
      </div>
      <div>
        <Resource name = {wood.name} amount = {wood.amount}></Resource>
      </div>
      <div>
        <Resource name = {iron.name} amount = {iron.amount}></Resource>
      </div>
    </div>
    <div>
      <Timer handleUpdate = {update}></Timer>
    </div>
  </div>)
}

export default App;