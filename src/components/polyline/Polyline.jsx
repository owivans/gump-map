import { Component } from 'react'

export default class Polyline extends Component {
  renderPolylines () {
    const { markers, map, maps } = this.props
    const { pendingRoute, traveledRoute, actualLocation } = markers;
    /** Example of rendering non geodesic polyline (straight line) */
    let traveledRoutePolyline = new maps.Polyline({
      path: [...traveledRoute, actualLocation],
      geodesic: false,
      strokeColor: '#e81e5d',
      strokeOpacity: 0.7,
      strokeWeight: 0.5
    })
    traveledRoutePolyline.setMap(map)

    let pendingRoutePolyline = new maps.Polyline({
      path: [actualLocation, ...pendingRoute],
      strokeOpacity: 0,
      strokeWeight: 0.8,
      strokeColor: '#e81e5d',
      icons: [
        {
          icon: {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 0.5,
          },
          offset: '0',
          repeat: '10px',
        },
      ],
    })
    pendingRoutePolyline.setMap(map)
  }

  render () {
    this.renderPolylines()
    return null
  }
}
