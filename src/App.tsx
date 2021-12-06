import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react';
import { updateSourceFile } from 'typescript';
import './App.css';
import Timer from './Timer'

// structs
interface appProps {

}

interface Resource {
  name: string,
  delta: number,
  amount: number
}

// let resList: Array<string> = [
//   "rock", "wood", "tungsten", "iron"
// ]

function App(props: appProps) {
  function update() {
    updateResources();
  }

  function updateResources() {
    setLabour({name: "labour", delta: labour.delta, amount: labour.delta + labour.amount});
    setRock({...rock, amount: labour.delta + labour.amount});
    setWood({...wood, amount: labour.delta + labour.amount});
    setIron({...iron, amount: labour.delta + labour.amount});
  }

  //initialise resource state
  const [labour, setLabour] = useState<Resource>({name: "labour", delta: 1, amount: 0});
  const [rock, setRock] = useState<Resource>({name: "rock", delta: 0, amount: 0});
  const [wood, setWood] = useState<Resource>({name: "wood", delta: 0, amount: 0});
  const [iron, setIron] = useState<Resource>({name: "iron", delta: 0, amount: 0});

  return ( 
  <div>
    <div>
      <div>
        {labour.name} {labour.amount} {labour.delta}
      </div>
      <div>
        {rock.name} {rock.amount} {rock.delta}
      </div>
      <div>
        {wood.name} {wood.amount} {wood.delta}
      </div>
      <div>
        {iron.name} {iron.amount} {iron.delta}
      </div>
    </div>
    <Timer handleUpdate = {update}></Timer>
  </div>)
}

export default App;
