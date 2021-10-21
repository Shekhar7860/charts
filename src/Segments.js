
import * as React from 'react';
const Segments = (props) => {
    return (
        <>
    <div style={{flexDirection: 'row',
    display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Files Per RO</button>
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
        <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Core/Urban</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>WIRR</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}></button>
          </div>
          </div>
          <div style={{width : '20%'}}>
        <div style={{flexDirection : 'column', display : 'flex'}}>
     <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Today's Report</button>
          </div>
     
          </div>
          </div>
          
    </div>
    </>)
}

export default Segments;