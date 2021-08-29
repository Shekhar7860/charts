import * as React from 'react';
import { SampleBase } from './SampleBase';
import { PropertyPane } from './PropertyPane';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, FunnelSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
export let data1 = [{ x: "China", y: 1409517397, text: "China" },
    { text: "$17194.6", y: 1339180127 },
    { text: "$15171.4", y: 524459463  },
    { text: "$7347.7", y: 333991379  },
    { text: "$7328.9", y: 299288278},
]
class Funnel extends SampleBase {
    render() {
        return (<div className='control-pane'>
        <div className='control-section row'>
          <div className='col-lg-9'>
            <AccumulationChartComponent id='funnel-chart' ref={funnel => this.funnel = funnel} title='Sum Of Amount (Thousands) : $47k' load={this.load.bind(this)} tooltip={{ enable: true, format: '${point.x} : <b>${point.y}</b>' }} resized={this.onChartResized.bind(this)} loaded={this.onChartLoad.bind(this)}>
              <Inject services={[FunnelSeries, AccumulationTooltip, AccumulationDataLabel]}/>
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' type='Funnel' width='60%' height='80%' neckWidth='25%' neckHeight='5%' neckHeight='18%' explode={false} dataLabel={{
            name: 'text', visible: true,  connectorStyle: { length: "100%" }
        }}>
                </AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>
          
        </div>
      </div>);
    }
    pyramidneckWidth(e) {
        let neckWidth = document.getElementById('pyramidNeckWidth').value;
        this.funnel.series[0].neckWidth = neckWidth + '%';
        document.getElementById('neckWidth').innerHTML = neckWidth + '%';
        this.funnel.removeSvg();
        this.funnel.refreshSeries();
        this.funnel.refreshChart();
    }
    ;
    pyramidneckHeight(e) {
        let neckHeight = document.getElementById('pyramidNeckHeight').value;
        this.funnel.series[0].neckHeight = neckHeight + '%';
        document.getElementById('neckHeight').innerHTML = neckHeight + '%';
        this.funnel.series[0].animation.enable = false;
        this.funnel.removeSvg();
        this.funnel.refreshSeries();
        this.funnel.refreshChart();
    }
    ;
    onChartLoad(args) {
        document.getElementById('funnel-chart').setAttribute('title', '');
    }
    ;
    load(args) {
        let selectedTheme = ''
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
            args.accumulation.series[0].width = '80%';
            args.accumulation.series[0].height = '70%';
        }
    }
    ;
    onChartResized(args) {
        let bounds = document.getElementById('funnel-chart').getBoundingClientRect();
        if (bounds.width < bounds.height) {
            args.accumulation.series[0].width = '80%';
            args.accumulation.series[0].height = '70%';
        }
        else {
            args.accumulation.series[0].width = '60%';
            args.accumulation.series[0].height = '80%';
        }
    }
}

export default Funnel;