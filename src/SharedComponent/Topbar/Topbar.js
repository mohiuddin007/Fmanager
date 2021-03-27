import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Topbar.css';

const Topbar = ({ topbarTitle }) => {
    return (
        <div class="row p-3 topbarBg ">
            <div class="col-7">
                <h5>{topbarTitle}</h5>
            </div>
            <div class="col-5 text-right">
                <span class="mr-5 text-weight-bold"><FontAwesomeIcon icon={faUser} /> Profile</span>
                <span class="text-weight-bold"><FontAwesomeIcon icon={faCog} />  Setting</span>
            </div>
        </div>
    );
};

export default Topbar;