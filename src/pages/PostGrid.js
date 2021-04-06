import { Pagination } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TagsRow from "./TagsRow";

const PostGrid = ({ posts }) => {
  const [pageSize, setPageSize] = useState(6);
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;
    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize]);

  useEffect(() => {
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  }, [pageSize, current]);

  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">
        {paginatedPosts.map((post, index) => (
          <div className="post-container">
            <figure>
              <Link to={post.link}>
                <img
                  src={require(`../assets/images/${post.image}`).default}
                  alt={post.image}
                />
              </Link>
            </figure>
            <TagsRow tags={post.categories} />
            <h2>{post.title}</h2>
            <p className="author-text">
              <span>
                By <Link to={`/author/${post.author}`}> {post.author}</Link>
              </span>
              <span> - {post.date}</span>
            </p>
            <p className="description-text">{post.description}</p>
            <Link to={post.link}>Read More...</Link>
          </div>
        ))}
      </section>
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  );
};

export default PostGrid;
