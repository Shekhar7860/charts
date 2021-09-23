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
import Segments from './Segments';
import './App.css';
import BarGraph from './BarGraph';
import { useHistory } from "react-router-dom";
import SegmentsMix from './SegmentsMix';
const Detail = () => {

    const history = useHistory();

        return <>
        <SegmentsMix/>
    </>;
    

}
;


export default Detail;
