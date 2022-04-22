import "./HomeProductTwo.style.scss";
import Button from "../../../../components/Button/Button";

const HomeProductTwo = () => {
  return (
    <div className="product-home-two">
      <h2 className="product-home-two-title">ZX7 Speaker</h2>
      <Button type="link" href="/product/zx7-speaker" variant="black">
        See Product
      </Button>
    </div>
  );
};

export default HomeProductTwo;
