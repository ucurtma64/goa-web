import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

class Store extends Component {
    render() {
        return (
            <>
            <style type="text/css">
                {`
                .pricing .card {
                border: none;
                border-radius: 1rem;
                transition: all 0.2s;
                box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
                }
                
                .pricing hr {
                margin: 1.5rem 0;
                }

                .pricing .card-title {
                margin: 0.5rem 0;
                font-size: 0.9rem;
                letter-spacing: .1rem;
                font-weight: bold;
                }
                
                .pricing .card-price {
                font-size: 3rem;
                margin: 0;
                }
                
                .pricing .card-price .period {
                font-size: 0.8rem;
                }
                
                .pricing ul li {
                margin-bottom: 1rem;
                }
                
                .pricing .text-muted {
                opacity: 0.7;
                }
                
                .pricing .btn {
                font-size: 80%;
                border-radius: 5rem;
                letter-spacing: .1rem;
                font-weight: bold;
                padding: 1rem;
                opacity: 0.7;
                transition: all 0.2s;
                }
                
                /* Hover Effects on Card */
                
                @media (min-width: 992px) {
                .pricing .card:hover {
                    margin-top: -.25rem;
                    margin-bottom: .25rem;
                    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
                }
                .pricing .card:hover .btn {
                    opacity: 1;
                }
                `}
            </style>
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                    {/*<!-- Free Tier -->*/}
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Single User</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>5GB Storage</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Unlimited Public Projects</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Community Access</li>
                            <li className="text-muted"><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faTimes} /></span>Unlimited Private Projects</li>
                            <li className="text-muted"><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faTimes} /></span>Dedicated Phone Support</li>
                            <li className="text-muted"><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faTimes} /></span>Free Subdomain</li>
                            <li className="text-muted"><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faTimes} /></span>Monthly Status Reports</li>
                            </ul>
                            <button className="btn btn-block btn-primary text-uppercase">Button</button>
                        </div>
                        </div>
                    </div>
                    {/*<!-- Plus Tier -->*/}
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span><strong>5 Users</strong></li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>50GB Storage</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Unlimited Public Projects</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Community Access</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Unlimited Private Projects</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Dedicated Phone Support</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Free Subdomain</li>
                            <li className="text-muted"><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faTimes} /></span>Monthly Status Reports</li>
                            </ul>
                            <button className="btn btn-block btn-primary text-uppercase">Button</button>
                        </div>
                        </div>
                    </div>
                    {/*<!-- Pro Tier -->*/}
                    <div className="col-lg-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span><strong>Unlimited Users</strong></li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>150GB Storage</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Unlimited Public Projects</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Community Access</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Unlimited Private Projects</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Dedicated Phone Support</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span><strong>Unlimited</strong> Free Subdomains</li>
                            <li><span className="fa-li"><FontAwesomeIcon mask={['fas']} icon={faCheck} /></span>Monthly Status Reports</li>
                            </ul>
                            <button className="btn btn-block btn-primary text-uppercase">Button</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default connect(null, actions)(Store);