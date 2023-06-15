import React, { useState } from 'react';
import './App.css';
import Searchbar from './searchbar';
import Listelement from './listelements';
import Footer from './footer';
function App() {
  const [listitem, setlistitem] = useState([]);
  let addlist = (inputtxt) => {
    setlistitem([...listitem,inputtxt]);
  }
  const delet = (key) =>{
    let newli = [...listitem]
    newli.splice(key,1)
    setlistitem([...newli])
  }
  return (
    <div className='list'>
      <center><h1>TODO LISTA</h1></center>
      <Searchbar addlist = {addlist}/>
      {
        listitem.map((listit,i) => {
          return(
          <Listelement key = {i} delet = {delet} item = {listit} index = {i}/>
          )
        })
      }
      <Footer/>
      
    </div>
  );
}

export default App;
