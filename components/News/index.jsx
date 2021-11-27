import { useGetNewsQuery } from "../../services/cryptoNewsApi";
import Loading from "../Loading";
import NewsCard from "../NewsCard";
import newsStyles from "./news.module.css";
function News({ simplified }) {
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 30,
  });
  const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
  if (!cryptoNews?.value) return <Loading />;
  return (
    <div>
      <div className={newsStyles.cryptoNews}>
        <div className={newsStyles.topBar}>
          {!simplified && <h1>Latest Crypto News</h1>}
        </div>

        <div className={newsStyles.newsRow}>
          {cryptoNews.value.map((news) => (
            <NewsCard
              url={news.url}
              name={news.name}
              image={news?.image?.thumbnail?.contentUrl || demoImage}
              // published={moment(news.datePublished).startOf("ss").fromNow()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
