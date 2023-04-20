import React, {Component} from 'react';

import Header from './Header';
import Footer from './Footer';
import Logo from '../Images/Recycle_Ontario.png'

class About extends Component {
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
        <Header page = {4}/>
        <div id="overviewAbout" style = {{paddingTop: '100px'}}>
          <div id="headerFill2">
          </div>

          <div id="fixedWidth">
            <div id="desclong4">
              <div id="header32">
                <h1 style = {{paddingTop:'25px'}}>Who Are We?</h1>
              </div>
            </div>
            <div id="leftFill">

            </div>

            <div id="logodivBig">
              <a style = {{textDecoration:'none'}} href="index.html"> <img src={Logo} alt="Image Not Found" width="90%" height="90%" /> </a>

            </div>
            <div id="rightFill">
            </div>

          </div>


          <div id="fixedWidth">

            <div id="desclong5" style = {{textAlign:'left', }}>
              <div id="header33" >
                <h1 style = {{textAlign:'left', }}><b>About Us</b>
              </h1>
              <p style = {{textAlign:'left',paddingLeft:'60px' , paddingRight:'60px'}}>REMINE INDIA PRIVATE LIMITED is a UTTARAKHAND based PRIVATE ltd. Company Registered at dated 06-DEC-2022 on Ministry of Corporate Affairs(MCA), The Corporate Identification Number (CIN) of REMINE INDIA PRIVATE LIMITED is U37100UR2022PTC014948 and registration number is U37100UR2022PTC014948 It has been classified as COMPANY LIMITED BY SHARES and is registered under Registrar of Companies UTTARAKHAND India. Authorized share capital of REMINE INDIA PRIVATE LIMITED is Rs. 1000000 and its paid up capital is Rs. 1000000. It aspire to serve in RECYCLING activities across the India.
              </p>
            </div>
          </div>
        </div>


        <div id="fixedWidth">

          <div id="Drawing2Loc">
            <div id="leftFill">

            </div>

          </div>


        </div>


        <div id="fixedWidth">

          <div id="desclong7">
            <div id="header32">
              <h1><b>Contact Us</b>  </h1><p style = {{marginTop:'-15px'}}>Email: director@remine.in</p>

            </div>
          </div>
        </div>



        <div id="fixedWidth">

          <div id="leftFill2">

          </div>

          <div id="desclong7">
            <div id="header32">

              <p style = {{paddingTop:'30px'}}><br /> Find Us At<br />
WARD NO. 3, SUPRIYA COLONY, SITARGANJ SITARGANJ UDHAM SINGH NAGAR UR 262405 IN</p>
            </div>
          </div>

        </div>



    <Footer />
  </div>
</div>


);
}


}

export default About;
