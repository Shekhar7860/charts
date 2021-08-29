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
import './App.css'
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.primaryxAxis = { valueType: 'DateTime', crosshairTooltip: { enable: true, fill: '#9c88ff' }};
        this.crosshair = { enable: true, fill : 'red'};
        this.marker = { visible: true};
    }
    render() {

        return <>
         <div style={{flexDirection: 'row',
 display : 'flex', justifyContent : 'center'}}>
           <div style={{width : '38%'}}>
          <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 30, backgroundColor : '#ff6348', borderColor : '#ff6348', marginTop : 20, color : 'white', marginHorizontal : 20}}>Login</button>
          </div>
        <ChartComponent id='charts' primaryXAxis={this.primaryxAxis} crosshair={this.crosshair} width='300' height='300'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Crosshair, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} fill={'#9c88ff'} xName='x' yName='y' type='Line' marker={this.marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    <div style={{width : '25%'}}>
    <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 30, backgroundColor : '#ff6348', borderColor : '#ff6348', marginTop : 20, color : 'white', marginHorizontal : 20}}>Stage Of File</button>
          </div>
    <Funnel/>
    </div>
    <div style={{width : '30%'}}>
    <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 30, backgroundColor : '#ff6348', borderColor : '#ff6348', marginTop : 20, color : 'white', marginHorizontal : 20}}>Legal & Technical</button>
          </div>
    <StackedBar/>
</div>
</div>
<div style={{flexDirection: 'row', justifyContent : 'center', display : 'flex'}}>
   <div style={{width : '38%'}}>
   <div style={{alignSelf : 'center', width : '115%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 30, backgroundColor : '#ff6348', borderColor : '#ff6348', marginTop : 20, color : 'white', marginHorizontal : 20}}>Disbursement</button>
          </div>
          <div style={{display : 'flex', justifyContent : 'center', marginTop : 20}}>
      <span>Cloud Business</span>
    <ReactSpeedometer customSegmentStops={[0, 200, 500, 600, 1000]}
    segmentColors={["#c0392b", "#ff7f50", "#10ac84"]}
    ringWidth={20}
    segments={5}
    needleColor={'#000000'}
    needleHeightRatio={0.5}
    value={500}/>
      </div>
    </div>
    <div style={{width : '30%'}}>
    <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 30, backgroundColor : '#ff6348', borderColor : '#ff6348', marginTop : 20, color : 'white', marginHorizontal : 20}}>PortFolio Health</button>
          </div>
    <Pie />
    </div>
    <div style={{width : '30%'}}>
    <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 30, backgroundColor : '#ff6348', borderColor : '#ff6348', marginTop : 20, color : 'white', marginHorizontal : 20}}>Fresh Bouncing</button>
          </div>
          <div>
            <span>Cloud Business</span>
          <ReactSpeedometer customSegmentStops={[0, 200, 500, 600, 1000]}
    segmentColors={["#c0392b", "#ff7f50", "#10ac84"]}
    ringWidth={20}
    segments={5}
    needleColor={'#000000'}
    needleHeightRatio={0.5}
    value={500}/>
    </div>
    </div>
    </div>
    </>;
    }

}
;


export default App;
