import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import data from './dataSource';
import Funnel from './Funnel.js'
import ReactSpeedometer from "react-d3-speedometer"
import Pie from './Pie'
import Chart from "react-google-charts";
import StackedBar from './StackedBar';
import Segments from './Segments'
import './App.css'
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Productivity from './Productivity';
import Report from './Report'
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.primaryxAxis = { valueType: 'DateTime', crosshairTooltip: { enable: true, fill: '#9c88ff' }};
        this.crosshair = { enable: true, fill : 'red'};
        this.marker = { visible: true};
    }
    render() {

        return <>
         <Router>
         <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/productivity">
            <Productivity />
          </Route>
          <Route path="/tat-report">
            <Report/>
          </Route>
        </Switch>
         </Router>
    </>;
    }

}
;


export default App;
