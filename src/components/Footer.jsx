import React from 'react';
import { ReactComponent as LinkedinIcon } from '../images/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../images/twitter.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook.svg';
import { ReactComponent as YoutubeIcon } from '../images/youtube.svg';

const span = (<span className='divider'> | </span>)
const Footer = (props) => {
    return (
        <div className="container-fluid">
            <div className='d-flex'>
                 <div>
                <div className='mb-2 links'>
                    <a href="https://www.telerik.com/purchase/license-agreement/progress-kendoreact?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-awareness-license-agreement">License Agreement</a>
                </div>
                <div className='copyright'>
                    Copyright © 2019 Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.
                </div>
                </div>
                <div className='d-flex ml-auto'>
                    <div className="social">
                        <a href="https://www.facebook.com/KendoUI/"><FacebookIcon/></a>
                        <a href="https://twitter.com/kendoreact"><TwitterIcon/></a>
                        <a href="https://www.youtube.com/results?search_query=kendoreact"><YoutubeIcon/></a>
                        <a href="https://www.linkedin.com/showcase/telerik/"><LinkedinIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;