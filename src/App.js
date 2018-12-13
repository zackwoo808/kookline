import axios from "axios";
import Header from './Header.js';
import TabBar from './TabBar.js';
import React, {
  Component
} from 'react';
import Report from './Report.js';
import spotToIdMap from './spotToIdMap.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeReport: "Pipeline",
      report: {
        surfRange: '90ft and glassy',
        spotName: '',
      }
    };
  }

  componentDidMount() {
    axios.get(`https://api.surfline.com/v1/forecasts/${spotToIdMap["Pipeline"]}`).then(res => {
      //console.log(res.data.Analysis.surfRange[0]);
      this.setState({
        report: {
          surfRange: res.data.Analysis.surfRange[0],
          spotName: res.data.name,
        }
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  handleTabChange = (spot) => {
    axios.get(`https://api.surfline.com/v1/forecasts/${spotToIdMap[spot]}`).then(res => {
      //console.log(res.data.Analysis.surfRange[0]);
      this.setState({
        report: {
          activeReport: spot,
          surfRange: res.data.Analysis.surfRange[0],
          spotName: res.data.name,
        }
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className = "App" >
        <Header title = "KOOKLINE" />
        <TabBar reportData={spotToIdMap} handleClick={this.handleTabChange} />
        <Report reportData={this.state.report} spotId={this.state.activeTab} />
      </div>
    );
  }
}

export default App;