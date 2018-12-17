import React from 'react';
import PropTypes from 'prop-types';
import './TabBar.css';

const TabBar = ({ reportData, handleClick }) => (
    <div className="tab-bar">
        {Object.keys(reportData).map(spot => (
            <button
                key={spot.id}
                className="tab-link"
                onClick={() => handleClick(spot)}
                id={
                    spot === "El Porto" ?
                    "default-open" :
                    spot
                }
            >
                {spot}
            </button>
        ))}
    </div>
);

TabBar.propTypes = {
    reportData: PropTypes.object.isRequired
}

export default TabBar;