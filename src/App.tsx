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
    updateResourceAmounts();
    updateResourceDeltas();
  }

  function newAmount(oldResource: resourceState) {
    let newResource = oldResource
    newResource.amount += newResource.delta
    return newResource
  }

  function updateResourceAmounts() {
    setLabour(() => {let newLabour = labour; newLabour.amount += newLabour.delta; return newLabour;}); //i wonder if they all work as arrow functions?
    setRock(newAmount(rock));
    setWood(newAmount(wood));
    setIron({...iron, amount: iron.delta + iron.amount}); // react stops updating amounts when i change this to use newAmount
  }

  
  function growLabour() {
    let newLabour = labour;
    newLabour.delta = newLabour.amount * 0.08;
    setLabour(newLabour);
  }

  function updateResourceDeltas() {
    growLabour();
    console.log("updated delta " + (labour.delta)); //debugging
  }

  //initialise resource state
  const [labour, setLabour] = useState<resourceState>({name: "labour", delta: 1, amount: 10});
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