import millify from "millify";
import Loading from "../../components/Loading";
import { useGetExchangesQuery } from "../../services/cryptoApi";
import "./styles.scss";
import Table from "react-bootstrap/Table";
function Exchanges() {
  const { data, isFetching } = useGetExchangesQuery();
  const exchanges = data?.data?.exchanges;
  console.log(exchanges);
  if (isFetching) return <Loading />;

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Exchange</th>
          <th>24h Trade Volume</th>
          <th>Markets</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {exchanges.map((coin) => (
          <tr className="exchange" key={coin.symbol}>
            <td>{coin.rank}</td>
            <td className="coin-name-and-icon">
              <img
                src={coin.iconUrl}
                alt={coin.symbol}
                style={{ width: 25, marginRight: ".3rem" }}
              />{" "}
              {coin.name}
            </td>
            <td>${millify(coin.volume)}</td>
            <td>{millify(coin.numberOfMarkets)}</td>
            <td>{millify(coin.marketShare)}%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Exchanges;
