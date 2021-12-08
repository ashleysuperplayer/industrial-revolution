import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './Timer'
import Resource from './Resource'
import Button from './Button'

// structs
interface appProps {

}

interface resourceState {
  name: string;
  delta: number;
  amount: number;
  deltaEffects: Array<number>;
  deltaBase: number;
}

function App(props: appProps) {
  function update() {
    updateResources();
  }

  // function calcDelta(someResource: resourceState) {
  //   for(let effect of someResource.deltaEffects) {
  //     someResource.delta = someResource.deltaBase
  //   }
  // }

  function resourceClick(resource: resourceState) {
    console.log("button clicked")
  }

  function newAmount(oldResource: resourceState) {
    let newResource = oldResource
    newResource.amount += newResource.delta
    console.log(newResource.amount)
    return ({...newResource})
  }

  function updateResources() {
    setLabour(newAmount(labour)); //i wonder if they all work as arrow functions?
    setRock(newAmount(rock));
    setWood(newAmount(wood));
    setIron(newAmount(iron)); // react stops updating amounts when i change this to use newAmount
  }

  //initialise resource state
  // const [population, setPopulation] = useState<resourceState>({name: "population", delta: 0, amount: 100000, deltaEffects: [1], deltaBase: 1});
  const [labour, setLabour] = useState<resourceState>({name: "labour", delta: 1, amount: 10, deltaEffects: [1], deltaBase: 1});
  const [rock, setRock] = useState<resourceState>({name: "rock", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});
  const [wood, setWood] = useState<resourceState>({name: "wood", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});
  const [iron, setIron] = useState<resourceState>({name: "iron", delta: 5, amount: 0, deltaEffects: [1], deltaBase: 1});

  return ( 
  <div>
    <div>
      <div>
        <Button className = "" onClick = {() => resourceClick(labour)} text="labour"/>
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