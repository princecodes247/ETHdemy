    // import newsCardStyles from "./newsCard.module.css";
import React, {useState, useEffect, useCallback} from 'react';
function Fiats({ url, name, image, published }) {
    useEffect(
       ()=>{
         const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
        script.async = true;
        let options =  {
              "title": "Stocks",
              "tabs": [
                {
                  "title": "Financial",
                  "symbols": [
                    {
                      "s": "NYSE:JPM",
                      "d": "Jpmorgan Chase & Co"
                    },
                    {
                      "s": "NYSE:WFC",
                      "d": "Wells Fargo Co New"
                    },
                    {
                      "s": "NYSE:BAC",
                      "d": "Bank Amer Corp"
                    },
                    {
                      "s": "NYSE:HSBC",
                      "d": "Hsbc Hldgs Plc"
                    },
                    {
                      "s": "NYSE:C",
                      "d": "Citigroup Inc"
                    },
                    {
                      "s": "NYSE:MA",
                      "d": "Mastercard Incorporated"
                    }
                  ]
                },
                {
                  "title": "Technology",
                  "symbols": [
                    {
                      "s": "NASDAQ:AAPL",
                      "d": "Apple"
                    },
                    {
                      "s": "NASDAQ:GOOGL",
                      "d": "Google Inc"
                    },
                    {
                      "s": "NASDAQ:MSFT",
                      "d": "Microsoft Corp"
                    },
                    {
                      "s": "NASDAQ:FB",
                      "d": "Facebook Inc"
                    },
                    {
                      "s": "NYSE:ORCL",
                      "d": "Oracle Corp"
                    },
                    {
                      "s": "NASDAQ:INTC",
                      "d": "Intel Corp"
                    }
                  ]
                },
                {
                  "title": "Services",
                  "symbols": [
                    {
                      "s": "NASDAQ:AMZN",
                      "d": "Amazon Com Inc"
                    },
                    {
                      "s": "NYSE:BABA",
                      "d": "Alibaba Group Hldg Ltd"
                    },
                    {
                      "s": "NYSE:T",
                      "d": "At&t Inc"
                    },
                    {
                      "s": "NYSE:WMT",
                      "d": "Wal-mart Stores Inc"
                    },
                    {
                      "s": "NYSE:V",
                      "d": "Visa Inc"
                    }
                  ]
                }
              ],
              "width": 400,
              "height": 660,
              "showChart": true,
              "showFloatingTooltip": false,
              "locale": "en",
              "plotLineColorGrowing": "#2962FF",
              "plotLineColorFalling": "#2962FF",
              "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
              "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
              "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
              "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
              "gridLineColor": "rgba(240, 243, 250, 0)",
              "scaleFontColor": "rgba(120, 123, 134, 1)",
              "showSymbolLogo": true,
              "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
              "colorTheme": "dark"
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