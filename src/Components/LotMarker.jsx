import React from 'react';
import { Marker } from "react-google-maps"
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";


class LotMarker extends React.Component {

  // Constructor.
  constructor(props) {
    // Super Props.
    super(props);
    // State.
    this.state = {
      isOpen: false
    }
  }

  onToggleOpen = () => {
    console.log(this);
    this.setState({isOpen: !this.state.isOpen});
  }


  // Render.
  render() {

    // console.log(this);

    // Extract Props.
    const {
      props: {
        index,
        lat,
        lng,
        open
      }
    } = this
    console.log("This", this);

    return (
      <Marker key={index} position={{ lat: lat, lng: lng }} onClick={this.onToggleOpen}>
        {this.state.isOpen && <InfoBox onCloseClick={this.onToggleOpen}>{index}</InfoBox>}
      </Marker>
    )
  }
}

export default LotMarker;
