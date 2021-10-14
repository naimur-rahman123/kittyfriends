import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CardList from '../components/CardList';
import SrarchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import 'tachyons';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchField: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState(() => ({ kitties: res.data })));
  }

  onSearchChange = e => {
    this.setState(() => ({ searchField: e.target.value }));
  };

  render() {
    const { kitties, searchField } = this.state;
    const filteredKitties = kitties.filter(kitty =>
      kitty.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1 lh-title">Kitty Friends</h1>
        <SrarchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList kitties={filteredKitties} />
        </Scroll>
      </div>
    );
  }
}
