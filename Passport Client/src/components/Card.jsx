import { Link } from "react-router-dom";

const Card = ({ post }) => {
  // console.log(post);
  return (
    <Link className="link" to={`./post/${post.id}`}>
      <div className="card">
        <img src={post.img} alt="card image" className="card-img" />
        <h3>{post.tittle}</h3>
        <p>{post.desc}</p>
        <button className="cardButton">Read More</button>
      </div>
    </Link>
  );
};

export default Card;
