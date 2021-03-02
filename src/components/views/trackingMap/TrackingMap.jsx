import React, { Component } from 'react';
import GumpMap from '../../gumMap';
import Navbar from '../../navbar';

class TrackingMapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightMode: true,
    }
  }

  onChangeTheme = () => {
    const { lightMode } = this.state;
    this.setState({lightMode: !lightMode})
  };

  render() {
    const { lightMode } = this.state;
    return (
      <>
        <Navbar onChangeTheme={this.onChangeTheme} lightMode={lightMode} />
        <GumpMap lightMode={lightMode} />
      </>
    )
  }
};

export default TrackingMapView;
