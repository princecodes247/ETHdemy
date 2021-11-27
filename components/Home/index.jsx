import Stat from "../../components/Stat";
import "./styles.scss";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import millify from "millify";
import Coins from "../Coins";
import News from "../News";
import Loading from "../../components/Loading";
function Home() {
  const { data, isFetching } = useGetCoinsQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <Loading />;
  return (
    <div className="Home">
      <div className="container">
        <div className="global-stat">
          <h1>Global Statistics</h1>
          <div className="stat-row">
            <Stat
              title="Total Crytocurrencies"
              value={millify(globalStats.total)}
              icon="https://img.icons8.com/emoji/48/000000/coin-emoji.png"
            />
            <Stat
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
              icon="https://img.icons8.com/fluency/48/000000/exchange-bitcoin.png"
            />

            <Stat
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
              icon="https://img.icons8.com/color-glass/48/000000/graph.png"
            />
            <Stat
              title="Total 24h Volume"
              value={millify(globalStats.total24hVolume)}
              icon="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-open-24-hours-time-management-itim2101-flat-itim2101.png"
            />
            <Stat
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
              icon="https://img.icons8.com/nolan/64/total-sales-1.png"
            />
          </div>
        </div>
        <div className="top-coins">
          <h1>Top 10 Cryptocurrencies</h1>
          <Coins simplified />
        </div>
        <div className="top-news">
          <h1>Top Cryptocurrency News</h1>
          <News simplified />
        </div>
      </div>
    </div>
  );
}

export default Home;
