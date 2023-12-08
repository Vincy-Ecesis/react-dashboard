import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './FirstTab.css';
const FirstTab = () => {
    return (
        <>
            <div>
                <div>
                    <h3>Your Web 2.0 domains</h3>
                </div>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Active Domains">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="profile" title="Your Domains">
                        Tab content for Profile
                    </Tab>
                    {/* <Tab eventKey="contact" title="Contact" disabled>
                        Tab content for Contact
                    </Tab> */}
                </Tabs>
            </div>

        </>
    )
}

export default FirstTab