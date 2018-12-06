import Header from './Header.js';
import TabBar from './TabBar.js';
import React, { Component } from 'react';
import Report from './Report.js';
import './App.css';

class App extends Component {
    state = {
        activeTab: 0
    }

    handleTabChange = (index) => {
        this.setState({
            activeTab: index
        });
    }

    render() {
        return (
            <div className="App">
                <Header title="KOOKLINE"/>
                <TabBar reportData={testData} handleClick={this.handleTabChange} />
                <Report reportData={testData} spotId={this.state.activeTab}/>
            </div>
        );
    }
}

const testData = 
[
    {
        index: 0,
        spotName: "El Porto",
        timestamp: 1366902000,
        localTimestamp: 1366902000,
        issueTimestamp: 1366848000,
        fadedRating: 0,
        solidRating: 0,
        swell: {
            minBreakingHeight: 1,
            absMinBreakingHeight: 1.06,
            maxBreakingHeight: 2,
            absMaxBreakingHeight: 1.66,
            unit: "ft",
            components: {
                combined: {
                height: 1.1,
                period: 14,
                direction: 93.25,
                compassDirection: "W"
            },
            primary: {
                height: 1,
                period: 7,
                direction: 83.37,
                compassDirection: "W"
            },
            secondary: {
                height: 0.4,
                period: 9,
                direction: 92.32,
                compassDirection: "W"
            },
            tertiary: {
                height: 0.3,
                period: 13,
                direction: 94.47,
                compassDirection: "W"
            }
            }
        },
        wind: {
            speed: 10,
            direction: 85,
            compassDirection: "W",
            chill: 15,
            gusts: 13,
            unit: "mph"
        },
        condition: {
            pressure: 1020,
            temperature: 18,
            unitPressure: "mb",
            unit: "c"
        },
        charts: {
            swell: "http://cdn.magicseaweed.com/wave/750/1-1366902000-1.gif",
            period: "http://cdn.magicseaweed.com/wave/750/1-1366902000-2.gif",
            wind: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-4.gif",
            pressure: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-3.gif",
            sst: "http://cdn.magicseaweed.com/sst/750/1-1366902000-10.gif"
        },
        videoSource: "https://www.youtube.com/embed/fX6LBDvMnlg?autoplay=1&modestbranding=1&loop=1&rel=0&disablekb=1&controls=0"
    },
    {
        index: 1,
        spotName: "RJs",
        timestamp: 1366902000,
        localTimestamp: 1366902000,
        issueTimestamp: 1366848000,
        fadedRating: 0,
        solidRating: 0,
        swell: {
            minBreakingHeight: 1,
            absMinBreakingHeight: 1.06,
            maxBreakingHeight: 2,
            absMaxBreakingHeight: 1.66,
            unit: "ft",
            components: {
                combined: {
                height: 1.1,
                period: 14,
                direction: 93.25,
                compassDirection: "W"
            },
            primary: {
                height: 1,
                period: 7,
                direction: 83.37,
                compassDirection: "W"
            },
            secondary: {
                height: 0.4,
                period: 9,
                direction: 92.32,
                compassDirection: "W"
            },
            tertiary: {
                height: 0.3,
                period: 13,
                direction: 94.47,
                compassDirection: "W"
            }
            }
        },
        wind: {
            speed: 10,
            direction: 85,
            compassDirection: "W",
            chill: 15,
            gusts: 13,
            unit: "mph"
        },
        condition: {
            pressure: 1020,
            temperature: 18,
            unitPressure: "mb",
            unit: "c"
        },
        charts: {
            swell: "http://cdn.magicseaweed.com/wave/750/1-1366902000-1.gif",
            period: "http://cdn.magicseaweed.com/wave/750/1-1366902000-2.gif",
            wind: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-4.gif",
            pressure: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-3.gif",
            sst: "http://cdn.magicseaweed.com/sst/750/1-1366902000-10.gif"
        },
        videoSource: "https://www.youtube.com/embed/n35yLifPXj8?autoplay=1&modestbranding=1&loop=1&rel=0&disablekb=1&controls=0"
    }   
]

export default App;
