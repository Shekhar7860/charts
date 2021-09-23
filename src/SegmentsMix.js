
import * as React from 'react';
import Funnel  from './Funnel';
const SegmentsMix = (props) => {
    return (
        <>
    <div style={{flexDirection: 'row',
    display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Direct/Connector/Tele</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Avg. Login to Dis <br/>TAT</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>PSL/NPSL</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Fresh/BT/Top-Up</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Direct/Connector<br/>/Tele</button>
          </div>
          </div>
          
    </div>
    <div style={{flexDirection: 'row',
    display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '30%'}}>
        <div style={{flexDirection: 'column',
    display : 'flex', justifyContent : 'center'}}>
          <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center', flexDirection : 'column'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Core/Urban</button>
          </div>
          <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center', flexDirection : 'column', marginTop : 220}}>
          <button style={{width : 320, height : 30, backgroundColor : '#f39c12', borderColor : '#f39c12', marginTop : 20, color : 'white', marginHorizontal : 20}}>PD</button>
          </div>
          <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center', flexDirection : 'column', marginTop : 0}}>
          <button style={{width : 320, height : 30, backgroundColor : '#d63031', borderColor : '#d63031', marginTop : 2, color : '#000000', marginHorizontal : 20}}>Financial Sanction</button>
          </div>
          <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center', flexDirection : 'column', marginTop : 0}}>
          <button style={{width : 320, height : 30, backgroundColor : '#dfe6e9', borderColor : '#dfe6e9', marginTop : 1, color : '#000000', marginHorizontal : 20}}>Final Sanction</button>
          </div>
          <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center', flexDirection : 'column', marginTop : 0}}>
          <button style={{width : 320, height : 30, backgroundColor : '#74b9ff', borderColor : '#74b9ff', marginTop : 1, color : '#000000', marginHorizontal : 20}}>Rejected</button>
          </div>
          <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center', flexDirection : 'column', marginTop : 0}}>
          <button style={{width : 320, height : 30, backgroundColor : '#ffffff', borderWidth : 0, marginTop : 1, color : '#000000', marginHorizontal : 20}}>Disbursement</button>
          </div>
          </div>
          </div>
          <div style={{width : '15%'}}>
          </div>
          <div style={{width : '20%'}}>
          <Funnel funnelId={'funnel-chart9'}/>
          </div>
         
          <div style={{width : '20%'}}>
          </div>
          
          <div style={{width : '20%'}}>
        <div style={{flexDirection : 'column', display : 'flex'}}>
        <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>TAT Report</button>
          </div>
     <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Today's Report</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Industry/Profile</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Product/Policy</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Source</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>IMD Report</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#e84118',borderRadius : 7, borderColor : '#e84118', marginTop : 20, color : 'white', marginHorizontal : 20}}>Technical Sales</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#487eb0',borderRadius : 7, borderColor : '#487eb0', marginTop : 20, color : 'white', marginHorizontal : 20}}>Rejection Reasons</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#dcdde1',borderRadius : 7, borderColor : '#dcdde1', marginTop : 20, color : 'white', marginHorizontal : 20}}>Collateral</button>
          </div>
          </div>
          </div>
          
    </div>
    </>)
}

export default SegmentsMix;