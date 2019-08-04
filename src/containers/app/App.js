import React, { Component } from 'react';
import {CardList} from '../../components/card-list/card-list.component';
import {SearchBox} from '../../components/search-box/search-box.component.jsx';
import {Scroll} from '../../components/scroll/scroll.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
          monsters: [],
          searchField : ''
      }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value})
  }
  
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = 
          monsters.filter(item => 
            item.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return !monsters.length ?
      <h1>Loading...</h1> :
      (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeHolder = 'Search Monsters'
                    onSearchChange = {this.onSearchChange}
          />
          <Scroll>
            <CardList monsters = {filteredMonsters}/>
          </Scroll>
        </div>
      );
  }
}

export default App;

//key included as there are several items of same type
//ternary used instead of if else