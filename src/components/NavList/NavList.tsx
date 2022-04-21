import "./NavList.style.scss";
import categories from "../../data/categories.json";
import { Link } from "react-router-dom";

const NavList = () => {
  const categoriesList = [{ name: "home", href: "/" }, ...categories];

  return (
    <ul className="nav-list">
      {categoriesList.map(({ name, href }, index) => (
        <li key={index}>
          <Link className="nav-list-item" to={`/category/${href}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
