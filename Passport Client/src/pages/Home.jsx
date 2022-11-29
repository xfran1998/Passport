import { posts } from "../data";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      {posts.map((post, i) => {
        return <Card key={`card-${i}`} post={post} className="card" />;
      })}
    </div>
  );
};

export default Home;
