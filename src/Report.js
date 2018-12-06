import React from 'react';
import PropTypes from 'prop-types';
import './Report.css';

const Report = ({ reportData, spotId }) => (
    // <ul className="report-list">
    //     {reportData.map(report =>
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
                {reportData[spotId].spotName} Surf Cam
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
                src={reportData[spotId].videoSource}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="cam-feed"
            >
            </iframe>
        </div>
        <p>Spot: {reportData[spotId].spotName}</p>
        <p>
            <span>Swell: {reportData[spotId].swell.minBreakingHeight} - {reportData[spotId].swell.maxBreakingHeight}</span>
            <span> {reportData[spotId].swell.unit}</span>
        </p>
    </div>
    //     )}
    // </ul>
)

Report.propTypes = {
    reportData: PropTypes.array.isRequired
}

export default Report;