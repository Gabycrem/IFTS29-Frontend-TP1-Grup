import "../../styles/global.css";
import "../Card/Card.css";




export default function Card({ title, image, description, extraContent, className = "" }) {
  return (
    <div className={`card ${className}`}>

      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {extraContent && <div className="card-extra">{extraContent}</div>}
      </div>
    </div>
  );
}
