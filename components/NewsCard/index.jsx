import newsCardStyles from "./newsCard.module.css";
function NewsCard({ url, name, image, published }) {
  return (
    <a
      className={newsCardStyles.newsCard}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={newsCardStyles.titleImg}>
        <h6 className={newsCardStyles.h4}>{name}</h6>
        <img className={newsCardStyles.img} src={image} alt="" />
      </div>
      <p>{published}</p>
    </a>
  );
}

export default NewsCard;
