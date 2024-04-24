function PortfolioCard({ title, image }) {
  return (
    <div className="card">
      <div>
        <h2>{title}</h2>
      </div>
      <a href="#">
      <img src={image} alt={title} style={{ width: "300px", height: "200px" }}/>
      </a>
      <div>
        <a href="#">github repo</a>
      </div>
    </div>
  );
}

export default PortfolioCard;