import "./CatgoryHeader.style.scss";

interface CategoryHeaderProps {
  category?: string;
}

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  return (
    <header className="category-header">
      <div className="category-header-container">
        <h1 className="category-header-title">{category}</h1>
      </div>
    </header>
  );
};

export default CategoryHeader;
