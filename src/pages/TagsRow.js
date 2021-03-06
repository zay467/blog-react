import { categoryColors } from "../components/style";

const TagsRow = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="tag"
          style={{ backgroundColor: categoryColors[tag] }}
        >
          {tag.toUpperCase()}
        </span>
      ))}
    </div>
  );
};

export default TagsRow;
