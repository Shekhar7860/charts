import PieChart, {
  Legend,
  Series,
  Export,
  Label,
  HoverStyle,
  SmallValuesGrouping,
  Connector
} from 'devextreme-react/pie-chart';
import * as React from "react";
import { olympicMedals } from './data.js';
const customPalette = ['#54a0ff', '#00b894', '#30336b', '#81ecec'];
class Pie extends React.Component {
  customizeLabel(point) {
    return `${ point.valueText }%`;
  }
    centerRender = () => {
        return (<text>280%</text>)
    }
  render() {
    return (
      <>
      <PieChart
        id="pie"
        type="doughnut"
        title="Business Plan Management Chart"
        palette={customPalette}
        dataSource={olympicMedals}
        onPointClick={this.pointClickHandler}
        centerRender={this.centerRender}
      >
        <Series argumentField="country" valueField="medals">
        <Label visible={true}
            format="fixedPoint"
            customizeText={this.customizeLabel}
            backgroundColor="none">
            <Connector visible={true}></Connector>
          </Label>
        </Series>

        <Export enabled={true} />
        <Legend
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
        />
      </PieChart>
      
</>
    );
  }

  pointClickHandler(arg) {
    arg.target.select();
  }
}

export default Pie;