import React, { Component } from 'react';

import './style.css'

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      default: 'default'
    }
  };

  renderLocation = () => {
    const { locations, onSelectLocation, selectedLocation} = this.props;
    return locations.map(({ name, lat, lng, id, indicator, img}) => {
      const isSelected = selectedLocation === id;
      return (
        <div className='location' onClick={() => onSelectLocation(id)}>
        <div className={`${isSelected && 'active'} inactive`}></div>
        <div className={`picture `} style={{backgroundImage: `url(${img})`}}></div>
        <div className='location-details'>
          <div className='indicator'>{indicator}</div>
          <div className='name'>{name}</div>
          <div className='coordinates'>{lat}</div>
          <div className='coordinates'>{lng}</div>
        </div>
      </div>
      )})
  };

  render(){
    return (
      <div className='sidebar-main'>
        {this.renderLocation()}
      </div>
    )
  }
};

export default Sidebar;
