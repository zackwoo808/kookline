import React from 'react';
import PropTypes from 'prop-types';
import './Report.css';
import spotToVideoMap from './spotToVideoMap.js';

const Report = ({ reportData, spotId }) => (
    <div className="report-data">
        <div className="video-parent-container">
            <div
                className="title-blocker"
                style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "56px",
                    width: "560px",
                    marginTop: "20px",
                    position: "absolute"
                }}
            >
                {/* {reportData[spotId].spotName} Surf Cam */}
                <p className="cam-title">{reportData.spotName} Surf Cam</p>
            </div>
            <div
                className="logo-blocker"
                style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "42px",
                    width: "560px",
                    marginTop: "293px",
                    position: "absolute",
                }}
            >
            </div>
            <iframe
                className="cam-feed"
                width="560"
                height="315"
                // src={reportData[spotId].videoSource}
                src = {
                    `https://www.youtube.com/embed/${spotToVideoMap[reportData.spotName]}?autoplay=1&modestbranding=1&loop=1&rel=0&disablekb=1&controls=0`
                }
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="cam-feed"
            >
            </iframe>
        </div>

        {/* magicseaweed terms&conditions required logo */}
        {/* < a href = "http://magicseaweed.com" > < img src = "https://im-1-uk.msw.ms/msw_powered_by.png" alt=""/ > </a> */}
        
        {/* <p>Spot: {reportData[spotId].spotName}</p> */}
        {/* <p>Spot: {reportData.spotName}</p> */}
        <p>
            <span className="surf-range">{reportData.surfRange}</span>
            {/* <span> {reportData[spotId].swell.unit}</span> */}
        </p>
    </div>
)

Report.propTypes = {
    reportData: PropTypes.object.isRequired
}

export default Report;