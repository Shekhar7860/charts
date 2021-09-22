import React from "react";
import BarGraph from "./BarGraph";
const Productivity = () => {
return (
    <>
    <div style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
    <button style={{width : 330, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Productivity Analysis</button>
    </div>
    <div style={{flexDirection: 'row',
    display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Login Files Per RO</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Threshold<br/>Achievers</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Cross-sell products</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Fresh/BT/Top-Up</button>
          </div>
          </div>
          
    </div>
    <div style={{flexDirection: 'row',
    display : 'flex', justifyContent : 'center'}}>
        <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84', borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Productivity Per CM</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Non-Performer</button>
          </div>
          </div>
          <div style={{width : '20%'}}>
          </div>
          <div style={{width : '20%'}}>
     <div style={{alignSelf : 'center', width : '90%',display : 'flex', justifyContent : 'center'}}>

          </div>
          </div>
          <div style={{width : '20%'}}>
        <div style={{flexDirection : 'column', display : 'flex'}}>
     <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Sales Productivity</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>Credit Productivity</button>
          </div>
          <div style={{alignSelf : 'center', width : '100%',display : 'flex', justifyContent : 'center'}}>
          <button style={{width : 150, height : 50, backgroundColor : '#10ac84',borderRadius : 7, borderColor : '#10ac84', marginTop : 20, color : 'white', marginHorizontal : 20}}>LeaderBoard</button>
          </div>
          </div>
          </div>
    </div>
    </>
)
}

export default Productivity