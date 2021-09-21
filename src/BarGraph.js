import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair } from '@syncfusion/ej2-react-charts';
import data from './dataSource';
const BarGraph = (props) => {
    const primaryAxis = { valueType: 'DateTime', crosshairTooltip: { enable: true, fill: '#9c88ff' }};
    const crossHair = { enable: true, fill : 'red'};
    const showmarker = { visible: true};
    return (
        <ChartComponent id={props.barId} primaryXAxis={primaryAxis} crosshair={crossHair} width='300' height='300'>
    <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Crosshair, DateTime]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} fill={'#9c88ff'} xName='x' yName='y' type='Line' marker={showmarker}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>)
}

export default BarGraph;