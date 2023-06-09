import React, {Component} from 'react';
import { Link } from 'react-router'
import '../css/styles.css';
import { StyleSheet, css } from 'aphrodite/no-important';

import RecycleCanLogo from '../Images/Recycle_Ontario.png';


class Header extends Component {
  constructor() {
    super();
  }

  chooseHeader() {
    if (this.props.page === 0) {
      return(
        <ul>

          <li className="active"><Link to='/'><span>Home</span></Link></li>
          <li><Link to='/Ewaste'><span>Ewaste</span></Link></li>
          <li><Link to='/Battery'><span>Batteries</span></Link></li>
          <li><Link to='/Other'><span>Other Recyclable Materials</span></Link></li>
          <li><Link to='/About'><span>About</span></Link></li>
        </ul>
      );
    } else if (this.props.page === 1){
      return(
        <ul>
          <li ><Link to='/'><span>Home</span></Link></li>
          <li className="active"><Link to='/Ewaste'><span>Ewaste</span></Link></li>
          <li><Link to='/Battery'><span>Batteries</span></Link></li>
          <li><Link to='/Other'><span>Other Recyclable Materials</span></Link></li>
          <li><Link to='/About'><span>About</span></Link></li>
        </ul>
      );
    } else if (this.props.page === 2) {
      return(
        <ul>
          <li ><Link to='/'><span>Home</span></Link></li>
          <li ><Link to='/Ewaste'><span>Ewaste</span></Link></li>
          <li className="active"><Link to='/Battery'><span>Batteries</span></Link></li>
          <li><Link to='/Other'><span>Other Recyclable Materials</span></Link></li>
          <li><Link to='/About'><span>About</span></Link></li>
        </ul>
      );
    } else if (this.props.page === 3) {
      return(
        <ul>
          <li ><Link to='/'><span>Home</span></Link></li>
          <li ><Link to='/Ewaste'><span>Ewaste</span></Link></li>
          <li ><Link to='/Battery'><span>Batteries</span></Link></li>
          <li className="active"><Link to='/Other'><span>Other Recyclable Materials</span></Link></li>
          <li><Link to='/About'><span>About</span></Link></li>
        </ul>
      );
    } else if (this.props.page === 4) {
      return(
        <ul>
          <li ><Link to='/'><span>Home</span></Link></li>
          <li ><Link to='/Ewaste'><span>Ewaste</span></Link></li>
          <li ><Link to='/Battery'><span>Batteries</span></Link></li>
          <li ><Link to='/Other'><span>Other Recyclable Materials</span></Link></li>
          <li className="active"><Link to='/About'><span>About</span></Link></li>
        </ul>
      );
    } else if (this.props.page === 5) {
      return(
        <ul>
          <li ><Link to='/'><span>Home</span></Link></li>
          <li ><Link to='/Ewaste'><span>Ewaste</span></Link></li>
          <li ><Link to='/Battery'><span>Batteries</span></Link></li>
          <li ><Link to='/Other'><span>Other Recyclable Materials</span></Link></li>
          <li ><Link to='/About'><span>About</span></Link></li>
        </ul>
      );
    }
  }

  render() {

    const styles = StyleSheet.create({

      logoLinkStyle: {
        color:'white',
        textDecoration:'none',
      },

      logoImageStyle: {

        width: '324px',
        height: '108px',
        position: 'fixed',
      },

    });

    // console.log("Hi, ", this.props.page);

    return (

      <div id="header">

        <div id="fixedWidth">

          <div id="Logoback">
          </div>

          <div id="logodiv">
            <a className={css(styles.logoLinkStyle)}><Link to='/'> <img src = {RecycleCanLogo} alt="Image Not Found" style={{height: '95px', width: '325px'}}/> </Link></a>

          </div>

          <div id="cssmenu">

            {this.chooseHeader()}
          </div>

        </div>

      </div>

    );
  }


}

export default Header;
