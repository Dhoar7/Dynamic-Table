import React, { useState } from 'react';
import Search from '../Search/Search';
import TableData from '../Table-data/Table-data';

const  Table = ()=>{

  const fetchedData = [
    {
      "numberrange": 3,
      "name": "Aidan Sheppard",
      "email": "leo.vivamus.nibh@outlook.net",
      "phone": "(911) 648-7592",
      "country": "Canada",
      "region": "Jeju",
      "postalZip": "41200",
      "address": "920-7485 Ipsum Road"
    },
    {
      "numberrange": 3,
      "name": "Caldwell Kaufman",
      "email": "nulla@outlook.ca",
      "phone": "(238) 588-0879",
      "country": "New Zealand",
      "region": "Guainía",
      "postalZip": "A9B 7C9",
      "address": "7271 Arcu. Rd."
    },
    {
      "numberrange": 7,
      "name": "Deirdre Deleon",
      "email": "etiam.bibendum.fermentum@aol.edu",
      "phone": "(110) 864-0146",
      "country": "Indonesia",
      "region": "South Chungcheong",
      "postalZip": "571859",
      "address": "Ap #595-227 Cubilia Ave"
    },
    {
      "numberrange": 7,
      "name": "Micah Allen",
      "email": "adipiscing.lobortis.risus@icloud.edu",
      "phone": "(267) 457-6284",
      "country": "Poland",
      "region": "Victoria",
      "postalZip": "E6G 5IC",
      "address": "P.O. Box 744, 9314 Quis, Rd."
    },
    {
      "numberrange": 4,
      "name": "Dalton Thomas",
      "email": "nisl.maecenas@aol.couk",
      "phone": "(594) 375-6723",
      "country": "Chile",
      "region": "Australian Capital Territory",
      "postalZip": "24645",
      "address": "Ap #614-9332 Vestibulum, Ave"
    }
  ]

  const [mainData, setMainData] = useState ([...fetchedData]);
  const [order, setOrder] = useState('ASC')


  const head = mainData.map(e=>Object.keys(e))[0];
  const data = mainData.map(e=>Object.values(e));


  const sort =(header)=>{
    if (order === "ASC"){
        let sorted = [...mainData].sort((a, b, find=header)=>
        a[find].toString().toLowerCase() > b[find].toString().toLowerCase()? 1 : -1)
        setMainData(sorted);
        setOrder("DSC")
      }
    if (order === "DSC"){
        let sorted = [...mainData].sort((a, b, find=header)=>
        a[find].toString().toLowerCase() < b[find].toString().toLowerCase()? 1 : -1)
        setMainData(sorted);
        setOrder("ASC")
      }
  }

  const search = (inp)=>{
      if(mainData.length===0){
        setMainData([...fetchedData])
      }
        const test = [...fetchedData].filter(e=>[...head].some(a=> e[a].toString().toLowerCase().includes(inp.toLowerCase())))
        setMainData(test);
        }
  



  return (
    <div>
    <Search search = {search} />
    <TableData head = {head} data = {data} sort = {sort} mainData ={mainData} />
    </div>
  );
}

export default Table;
