import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-physics-components';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import './App.css';

class Blocks extends Component {
  render() {
    const items = [];

    for (let i = 0; i < 30; i++) {

      items.push(<Entity geometry="primitive: box; depth: 1.5; height: 1.5; width: 6"
                position="0 0.3 -1"
                key={i}>
        </Entity>);
    }
    return (
      <div>

       {items}

      </div>
    );
  }
}

export default Blocks;
