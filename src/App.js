import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap"

const  App = ()=>{

  const mainData = [
    {position:"LW", name: "Arun", score: '3'},
    {position:"CM", name: "Sab", score: '2'},
    {position:"ST", name: "Nare", score: '5'},
    {position:"RW", name: "Nish", score: '1'}
  ];

  const head = mainData.map(e=>Object.keys(e))[0];
  const data = mainData.map(e=>Object.values(e));


  const renderPlayer = (dat, index)=>{
    return(
      <tr key={index}>
        {dat.map((e, i)=><td key={i}>{e}</td>)}
      </tr>
    )
  }


  return (
    <div>
    <ReactBootStrap.Table striped bordered hover size="sm">
  <thead>
    <tr>
    {head.map((e, i)=>{
    return <th key={i}>{e}</th>
    })}
    </tr>
  </thead>
  <tbody>
    {data.map(renderPlayer)}
  </tbody>
</ReactBootStrap.Table>
</div>
  );
}

export default App;
