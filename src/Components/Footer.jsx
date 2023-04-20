import React, {Component} from 'react';
import '../css/styles.css';
import { StyleSheet, css } from 'aphrodite/no-important';

import RecycleCanLight from '../Images/Recycle_Ontario.png';
import GitHubLogo from '../Images/GitHub.png';


class Footer extends Component {
  constructor() {
    super();
  }


  render() {

    const styles = StyleSheet.create({

      logoLinkStyle: {
        color:'white',
        textDecoration:'none',
      },

      logoImageStyle: {

        width: '240px',
        height: '80px',
      },
      gitHubLogoStyle: {
        width: '35px',
        height: '35px',
      },

    });

    console.log("Hi, ", this.props.page);

    return (

      <div id="fixedwidth">
          <div id="footer">
              <div id="logodiv2">
                  <a href='Index.html'>
                      <p></p>
                  </a>

                  <a href=''><img src={RecycleCanLight} className = {css(styles.logoImageStyle)} /></a>
                  <p>Remine India.</p>

                  <a href='https://github.com/kaushik0703/Remine-India'><img src={GitHubLogo} className = {css(styles.gitHubLogoStyle)} />

                  </a>

              </div>
          </div>
      </div>

    );
  }


}

export default Footer;
