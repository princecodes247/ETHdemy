    // import newsCardStyles from "./newsCard.module.css";
import React, {useState, useEffect, useCallback} from 'react';
function Fiats({ url, name, image, published }) {
    useEffect(
       ()=>{
         const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
        script.async = true;
        let options =  {
          "colorTheme": "dark",
          "isTransparent": false,
          "width": "510",
          "height": "600",
          "locale": "en",
          "importanceFilter": "-1,0,1"
        }
        script.innerHTML = JSON.stringify(options)
        document.getElementById("myContainer").appendChild(script);
       }
    )

    return (
      <div id="myContainer">
        <div className="tradingview-widget-container">
           <div className="tradingview-widget-container__widget">
            </div>
        </div>
     </div>
    )
    }

export default Fiats;

