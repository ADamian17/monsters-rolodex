import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card_list/Card-list.component';
import SearchBar from './components/search_box/SearchBar';

class App extends Component {

  state = {
    monsters: [],
    searchField: '',
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(user => this.setState({ monsters: user }))
  } 
  
  handelSearch = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render () {
    const { monsters, searchField } = this.state;
    const filterMosters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
         < SearchBar  placeholder='search monters'  handleChange={ this.handelSearch} />
        < CardList monsters={filterMosters} />
      </div>
    );
  }
}

export default App;
