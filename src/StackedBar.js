import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    Legend, Category, StackingBarSeries, Tooltip, DataLabel, ILoadedEventArgs, ChartTheme
} from '@syncfusion/ej2-react-charts';
import { SampleBase } from './SampleBase';
import { Browser } from '@syncfusion/ej2-base';

export let data: any[] = [
    { x: 'Jeremy Sales', y: 3, y1: 3}, { x: 'Amanda Sales', y: 8, y1: 3 },
    { x: 'David Sales', y: 3, y1: 11, }, { x: 'Erica Sales', y: 8, y1: 4 },
    { x: 'Imran E', y: 20, y1: 21,}
];
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

class StackedBar extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <ChartComponent id='charts2' style={{ textAlign: "center" }}
                        primaryXAxis={{
                            valueType: 'Category',
                            majorGridLines: { width: 0 },
                        }}
                        primaryYAxis={{
                            edgeLabelPlacement: 'Shift'
                        }}
                        width={Browser.isDevice ? '100%' : '60%'}
                        height={'300'}
                        chartArea={{ border: { width: 0 } }}
                        load={this.load.bind(this)}
                        title='Sum Of Amount' loaded={this.onChartLoad.bind(this)}
                        tooltip={{ enable: true, format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'}}>
                        <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} xName='x' yName='y' name='New Business' type='StackingBar100'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data} xName='x' yName='y1' name='Add-On Business' type='StackingBar100'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        )
    }
    onChartLoad(args: ILoadedEventArgs): void {
        let chart: Element = document.getElementById('charts2');
        chart.setAttribute('title', '');
    };
        
    load(args: ILoadedEventArgs): void {
        let selectedTheme = '';
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        
    };
        
}

export default StackedBar