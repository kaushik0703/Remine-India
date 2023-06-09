import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

const google = window.google;
const _ = require("lodash");

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBipGTaEpZxIOqSRoYJakq64x9BQNjZwJs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 45.4235937, lng: -75.7031177
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    ref={props.onMapMounted}

    defaultZoom={11}
    defaultCenter={{ lat: 45.4235937, lng: -75.7031177 }}
    center={props.center}


    >
      <FusionTablesLayer
        url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
        options={{
          query: {
            select: `Name`,
            from: `1ySrhzEk6ubvy7EQZeG7zWEnP4UUNDbhcFviGiHBB`
          }
        }}
      />
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search ..."
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `30px`,
              marginTop: `9px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </SearchBox>
      </GoogleMap>
    );

    class Ewaste extends Component {
      constructor() {
        super();
      }
      componentDidMount() {
        window.scrollTo(0,0);

      }

      render() {
        const mainDivStyle = {
          width: '800px',
          backgroundColor: 'white',


        }

        return (
          <div>
            <Header page = {1}/>
            <section id="headerImgEwaste">
              <article>
                <div id="fixedWidth">
                </div>
              </article>

              <div class="parallax" data-velocity="-.3"></div>
              <div class="parallax" data-velocity="-.2" data-fit="525">
                <div id="fixedWidth">
                  <div id="window">
                    <div id="textWindow">
                      <h1> Recycle Your Ewaste </h1>
                      <h1> </h1>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <div id="overviewE" style = {{height:'900px'}}>
              <div id="fixedWidth">
                <div id="desclong3">
                  <div id="header3">
                    <h1><b>Enter Your Address or Postal Code To Begin</b></h1>
                  </div>
                </div>
              </div>


              <p id="demo"></p>

              <div id="fixedWidthM" style = {{width:"100%"}}>
                <input id="pac-input" class="controls" type="text" placeholder="Search Box" disabled style = {{opacity:'0'}}/>
                <div style = {{backgroundColor:"#333"}} />

                <MapWithAFusionTablesLayer />

              </div>

              <Footer />
            </div>

          </div>

        );
      }


    }

    export default Ewaste;
