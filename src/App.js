import React from 'react';
import Search from './Components/Search/Search'
import Results from './Components/Results/Results'
import './App.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <Search />
        <Results />
      </div>
      
    )
  }
}

export default App;