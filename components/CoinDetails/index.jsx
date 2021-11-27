import { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import {
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
} from "../../services/cryptoApi";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import Loading from "../../components/Loading";
import LineChart from "../../components/LineChart";

function CoinDetails() {
  const { coinId } = useParams();
  const [timePeriod] = useState("7d");
  const { data, isFetching } = useGetCoinDetailsQuery(coinId);
  const { data: coinHistory } = useGetCoinHistoryQuery({
    coinId,
    timePeriod,
  });
  const coinDetails = data?.data?.coin;
  if (isFetching) return <Loading />;

  let coinChange = coinDetails.change;

  if (coinChange < 0) {
    coinChange = <b style={{ color: "#e75e5f" }}> {coinChange}% </b>;
  } else {
    coinChange = <b style={{ color: "#52936d" }}> +{coinChange}% </b>;
  }

  // const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinDetails.price && millify(coinDetails.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: coinDetails.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${coinDetails.volume && millify(coinDetails.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinDetails.marketCap && millify(coinDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(coinDetails.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinDetails.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: coinDetails.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: coinDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(coinDetails.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(coinDetails.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];
  return (
    <div className="coin-detail-container">
      <div className="coin-heading-container">
        <img
          src={coinDetails.iconUrl}
          style={{ width: 40 }}
          alt={coinDetails.symbol}
        />
        <h2>{coinDetails.name}</h2> <code>{coinDetails.symbol}</code>
      </div>
      <div className="coin-price-and-change">
        <h1 className="coin-price">{`$${millify(coinDetails.price, {
          precision: 3,
        })}`}</h1>
        <p className="coin-change">{coinChange}</p>
      </div>
      {/* <select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Selct Time Period"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select> */}
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(coinDetails.price)}
        coinName={coinDetails.name}
      />
      <div className="stats-container">
        <div className="coin-value-stats">
          <div className="coin-value-stats-heading"></div>
          {stats.map(({ icon, title, value }) => (
            <div className="coin-stats" key={title}>
              <div className="coin-stats-name">
                <h4>{icon}</h4>
                <h5>{title}</h5>
              </div>
              <h4 className="stats">{value}</h4>
            </div>
          ))}
        </div>
        <div className="other-stats-info">
          <div className="coin-value-stats-heading"></div>
          {genericStats.map(({ icon, title, value }) => (
            <div className="coin-stats" key={title}>
              <div className="coin-stats-name">
                <h4>{icon}</h4>
                <h5>{title}</h5>
              </div>
              <h4 className="stats">{value}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="coin-desc-link">
        <div className="coin-desc">
          <h1 className="coin-details-heading">Overview</h1>
          {HTMLReactParser(coinDetails.description)}
        </div>
        <div className="coin-links">
          <h2 className="coin-links-heading">Links</h2>
          {coinDetails.links.map((link) => (
            <div className="coin-link" key={link.name}>
              <h4 className="link-name">{link.type}</h4>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;
