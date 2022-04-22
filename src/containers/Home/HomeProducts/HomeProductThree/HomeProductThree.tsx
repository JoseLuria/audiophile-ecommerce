import "./HomeProductThree.style.scss";
import { useResponsiveImages } from "../../../../hooks/useResponsiveImages";
import Button from "../../../../components/Button/Button";
import ProductThreeImageDesktop from "../../../../assets/home/desktop/image-earphones-yx1.jpg";
import ProductThreeImageTablet from "../../../../assets/home/tablet/image-earphones-yx1.jpg";
import ProductThreeImageMobile from "../../../../assets/home/mobile/image-earphones-yx1.jpg";

const HomeProductThree = () => {
  const productThreeImageObject = {
    mobile: ProductThreeImageMobile,
    tablet: ProductThreeImageTablet,
    desktop: ProductThreeImageDesktop,
  };

  const productThreeImage = useResponsiveImages(productThreeImageObject);

  return (
    <div className="product-home-three">
      <img className="product-home-three-image" src={productThreeImage} alt="YX1 Earphones" />
      <div className="product-home-three-content">
        <h2 className="product-home-three-title">YX1 Earphones</h2>
        <Button type="link" href="/product/yx1-earphones" variant="black">
          See Product
        </Button>
      </div>
    </div>
  );
};

export default HomeProductThree;
