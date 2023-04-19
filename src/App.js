import React, { Component } from 'react';
import { HousesList } from "../rest/HousesList";

class App extends Component {
  render() {
    return(
      <div>
        <HousesList props={{test: data}} />
      </div>
    )
  }
    
}