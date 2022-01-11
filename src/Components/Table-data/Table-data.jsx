import React from 'react';
import * as ReactBootStrap from "react-bootstrap"

const  TableData = ({head, data, sort})=>{
    

  const renderPlayer = (dat, index)=>{
    return(
      <tr key={index}>
        {dat.map((e, i)=><td key={i}>{e}</td>)}
      </tr>
    )
  }

if(data.length !== 0)
{
  return (
    <div>
        <ReactBootStrap.Table striped bordered hover size="sm">
            <thead>
                <tr>
                {head.map((e, i)=>{
                return <th key={i} onClick={()=>sort(`${e}`)}>{e}</th>
                })}
                </tr>
            </thead>
            <tbody>
                {data.map(renderPlayer)}
            </tbody>
        </ReactBootStrap.Table>
    </div>
  );
}else{
  return(
    <div>
      <h1>No Result to Show</h1>
    </div>
  )
}
}

export default TableData;
