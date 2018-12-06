import React from 'react';
import PropTypes from 'prop-types';
import './TabBar.css';

const TabBar = ({ reportData, handleClick }) => (
    <div className="tab-bar">
        {reportData.map(spot => 
            <button
                key={spot.id}
                className="tab-link"
                onClick={() => handleClick(spot.index)}
                id={
                    spot.spotName === "El Porto" ?
                    "defaultOpen" :
                    spot.spotName
                }
            >
                {spot.spotName}
            </button>
        )}
    </div>
);

TabBar.propTypes = {
    reportData: PropTypes.array.isRequired
}

export default TabBar;