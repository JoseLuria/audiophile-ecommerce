import "./HomeProductOne.style.scss";
import { useResponsiveImages } from "../../../../hooks/useResponsiveImages";
import Button from "../../../../components/Button/Button";
import Text from "../../../../components/Text/Text";
import ProductOneImageDesktop from "../../../../assets/home/desktop/image-speaker-zx9.png";
import ProductOneImageTablet from "../../../../assets/home/tablet/image-speaker-zx9.png";
import ProductOneImageMobile from "../../../../assets/home/mobile/image-speaker-zx9.png";

const HomeProductOne = () => {
  const productOneImageObject = {
    mobile: ProductOneImageMobile,
    tablet: ProductOneImageTablet,
    desktop: ProductOneImageDesktop,
  };

  const productOneImage = useResponsiveImages(productOneImageObject);

  return (
    <div className="product-home-one">
      <img className="product-home-one-image" src={productOneImage} alt="ZX9 Speaker" />
      <div className="product-home-one-content">
        <h2 className="product-home-one-title">ZX9 Speaker</h2>
        <Text className="product-home-one-text" color="white">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </Text>
        <Button type="link" href="/product/zx9-speaker" variant="gray">
          See Product
        </Button>
      </div>
    </div>
  );
};

export default HomeProductOne;
