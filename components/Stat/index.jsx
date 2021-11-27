import stat from "./stat.module.css";
function Stat({ title, value, icon }) {
  return (
    <div className={stat.Stat}>
      <img className={stat.img} src={icon} alt={title} />
      <div className="info">
        <p className="">{title}</p>
        <h3 className={stat.h3}>{value}</h3>
      </div>
    </div>
  );
}

export default Stat;
