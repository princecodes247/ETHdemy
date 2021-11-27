import card from "./card.module.css";
function Card({ rank, name, icon, price, marketCap, change }) {
  return (
    <div className={card.card} >
      <div className={card.nameIcon}>
        <p>
          {rank}. {name}
        </p>
        <img className={card.img} src={icon} alt={name} />
      </div>
      <p>Price: ${price}</p>
      <p>Market Cap: {marketCap}</p>
      <p>Change: <span className={`${change > 0 ? card.textGreen : card.textRed }`}>{change}%</span></p>
    </div>
  );
}

export default Card;
