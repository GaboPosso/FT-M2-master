import React from 'react';
import styled from "styled-components";

const DivButtons = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
}
const Buttons = {
  borderRadius: '5px',
  margin: '10px',
  padding: '5px'
}

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <div style={DivButtons}>
        <button  style={Buttons} onClick={() => window.alert(alerts.m1)}>Módulo 1</button>
        <button  style={Buttons} onClick={() => window.alert(alerts.m2)}>Módulo 2</button>
      </div>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
