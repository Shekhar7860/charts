import React from "react";
import BarGraph from "./BarGraph";
const Report = () => {
return (
    <>
    <div style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
    <button style={{width : 330, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>TAT Reprt</button>
    </div>
    <div style={{flexDirection: 'row',
    display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Login to PD TAT</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>PD to Sanction<br/>TAT</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Sanction to <br/> Disbursement TAT</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     
          </div>
          
    </div>
    <div style={{flexDirection: 'row',
    display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Technical TAT</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Legal TAT</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>

          </div>
          </div>
          <div style={{width : '20%'}}>
     
          </div>
    </div>
    </>
)
}

export default Report