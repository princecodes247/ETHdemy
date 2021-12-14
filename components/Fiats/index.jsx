    // import newsCardStyles from "./newsCard.module.css";

    import MarketOverview from "../MarketOverview";

    import EconomicCalendar from "../EconomicCalendar";

import React, {useState, useEffect, useCallback} from 'react';
function Fiats({ url, name, image, published }) {
   

    return (
      <div class="fiats">
        <MarketOverview/>
        <EconomicCalendar/>
     </div>
    )
    }

export default Fiats;
