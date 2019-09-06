import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import "../../../../static/css/pricing.css";

class Pricing extends Component {
	render() {
		return (
      <div className="background">
        <Container maxWidth="lg">
          <div className="panel pricing-table">
            <div className="pricing-plan">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                className="pricing-img"
              />
              <h2 className="pricing-header">Personal</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Dashboard Access</li>
                <li className="pricing-features-item">App Customization</li>
                <li className="pricing-features-item">
                  App content management
                </li>
                <li className="pricing-features-item nonecolor">
                  Limited theme selection
                </li>
                <li className="pricing-features-item nonecolor">
                  No adminstrative Management support feature
                </li>
                <li className="pricing-features-item nonecolor">
                  No App features update
                </li>
                <li className="pricing-features-item nonecolor">
                  No theme change
                </li>
              </ul>
              <span className="pricing-price">$200/mo</span>
              <a href="#/" className="pricing-button">
                Start now
              </a>
            </div>

            <div className="pricing-plan">
              <img
                src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
                alt=""
                className="pricing-img"
              />
              <h2 className="pricing-header">Enterprise</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Dashboard Access</li>
                <li className="pricing-features-item">App Customization</li>
                <li className="pricing-features-item">
                  App content management
                </li>
                <li className="pricing-features-item">
                  unLimited theme selection
                </li>
                <li className="pricing-features-item">
                  Adminstrative Management support feature
                </li>
                <li className="pricing-features-item">
                  Request App features update
                </li>
                <li className="pricing-features-item">Theme change</li>
              </ul>
              <span className="pricing-price">$400/mo</span>
              <a href="#/" className="pricing-button">
                Start now
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
	}
}

export default Pricing;

















































// import React, { Component } from 'react';

// className Pricing extends Component {
// 	render() {
// 		return (
//       <div className="price-table-wrapper">
//         <div className="pricing-table">
//           <h2 className="pricing-table__header">- BASIC -</h2>
//           <h3 className="pricing-table__price">£50</h3>
//           <a
//             target="_blank"
//             className="pricing-table__button"
//             href="http://www.digimadmedia.com"
//           >
//             Join Now!
//           </a>
//           <ul className="pricing-table__list">
//             <li>30 day free trial</li>
//             <li>50gb storage space</li>
//             <li>20% discount</li>
//             <li>24 hour support</li>
//           </ul>
//         </div>
//         <div className="pricing-table featured-table">
//           <h2 className="pricing-table__header">- BUSINESS -</h2>
//           <h3 className="pricing-table__price">£80</h3>
//           <a
//             target="_blank"
//             className="pricing-table__button"
//             href="http://www.digimadmedia.com"
//           >
//             Join Now!
//           </a>
//           <ul className="pricing-table__list">
//             <li>40 day free trial</li>
//             <li>100gb storage space</li>
//             <li>25% discount</li>
//             <li>24 hour support</li>
//           </ul>
//         </div>
//         <div className="pricing-table">
//           <h2 className="pricing-table__header">- PREMIUM -</h2>
//           <h3 className="pricing-table__price">£130</h3>
//           <a
//             target="_blank"
//             className="pricing-table__button"
//             href="http://www.digimadmedia.com"
//           >
//             Join Now!
//           </a>
//           <ul className="pricing-table__list">
//             <li>50 day free trial</li>
//             <li>200gb storage space</li>
//             <li>40% discount</li>
//             <li>24 hour support</li>
//           </ul>
//         </div>
//       </div>
//     );
// 	}
// }

// export default Pricing;