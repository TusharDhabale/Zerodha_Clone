import React from 'react';

function Award() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt='Largest broker recognition' />

                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Broker in India</h1>
                    <p className='mb-5'> 2+ million Zwerodha clients Contribute to over 15% of all retail order volume in India daily by tarding and investing in:</p>

<div className='row'>
        <div className='col-6'><ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    
                    </ul>
                    </div>
        <div className='col-6'><ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and government securities</p>
                        </li>
                    
                    </ul>
                    </div>
    </div>
    <img src='media/pressLogos.png' alt='Press partner logos' style={{ width:'90%' }} />
                </div>
            </div>
        </div>
    );
}

export default Award;