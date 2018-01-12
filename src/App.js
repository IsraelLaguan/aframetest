import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-physics-components';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    const items = [];

      for (let i = 0; i < 30; i++) {

        items.push( <Entity geometry="primitive: box; depth: 0.01; height: 0.01; width: 0.01"
                  position="0 0.3 -1"
                  material="color: #EF2D5E"
                  key={i}>
          </Entity>);
          console.log(items);
      }

    return (
      <Scene physics-world="gravity: 0 -9.8 0">
        <a-sky color='#FBC9C4'></a-sky>

        <a-assets>
          <a-mixin id="red" material="color: red"></a-mixin>
          <a-mixin id="green" material="color: green"></a-mixin>
          <a-mixin id="blue" material="color: blue; opacity: 0.5"></a-mixin>
          <a-mixin id="url-red" material="color: #d63959"></a-mixin>
          <a-mixin id="cube" geometry="primitive: box"></a-mixin>
        </a-assets>

        {/*Lights*/}
        <a-light
        	type="directional"
        	color="#FFF"
        	intensity="0.1"
        	position="-1 1 2">
        </a-light>
        <a-light
        	type="ambient"
        	color="#FFF">
        </a-light>

        {/*game ball*/}
        <Entity
          geometry="primitive: sphere; radius: 0.25;"
          position="0 2 -2"
          material="color: #EF2D5E"
          physics-body="velocity: 0.05 0.1 0; mass:0">
        </Entity>

        {/*game paddle*/}
        <Entity
          geometry="primitive: box; width:1; height: 0.2; depth: 0.2"
          position="0 0.3 -1"
          material="color: #42f4aa"
          physics-body="velocity: 0 0 0; mass:0">
        </Entity>

        <Entity geometry={items[0].props} position="1 0.3 -1"></Entity>
        <Entity geometry={items[1].props} position="2 0.3 -1"></Entity>
        <Entity geometry={items[2].props} position="3 0.3 -1"></Entity>
        <Entity geometry={items[3].props} position="4 0.3 -1"></Entity>
        <Entity geometry={items[4].props} position="5 0.3 -1"></Entity>

        <a-plane rotation="-90 0 0" width="4" height="4" color="#a0a0a0"></a-plane>
        <a-plane position="0 2 -2" rotation="0 0 0" width="4" height="4" color="#bfabce"></a-plane>

        <Entity position="0 0 3.8">
        	<a-camera look-controls id="myCamera" wasd-controls="enabled: false">
        		<a-cursor id="cursor" material="color: gray; opacity: 0.5">
        		</a-cursor>
        	</a-camera>
        </Entity>

      </Scene>
    );
  }
}

export default App;
