import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";
import PostMasonry from "../components/PostMasonary";
import MasonryPost from "../components/MasonryPost";
import PostGrid from "./PostGrid";

const trendingConfig = {
  1: {
    gridArea: "1/2/3/3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1/1/2/3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};
const mergeStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = "Zay Min Maw";
    post.description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore ipsum ea praesentium asperiores recusandae dolor minima neque possimus illum doloremque tenetur alias vel excepturi provident laborum, blanditiis omnis quae!";
  });
};

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();
const Home = () => {
  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        </div>
      </section>
      <section className="bg-white">
        <section className="container">
          <div className="row">
            <h1>Recent Posts</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>
      <section className="container">
        <div className="row">
          <PostMasonry posts={trending} columns={3} />
        </div>
      </section>
    </main>
  );
};

export default Home;
