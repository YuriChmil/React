import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TodoADD from './Components/List/TodoADD.js';
import Header from './Components/Header/Header.js';
import Search from './Components/Search/Search.js';
function App()
 {
   
  return(
    <div>
      <Header />
    <h1>Записна книжка</h1>
  
    <TodoADD />
<Search />

  </div>
  );
  
 
}





export default App;