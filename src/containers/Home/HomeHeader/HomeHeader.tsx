import "./HomeHeader.style.scss";
import { useResponsiveImages } from "../../../hooks/useResponsiveImages";
import HeroDesktop from "../../../assets/home/desktop/image-hero.png";
import HeroTablet from "../../../assets/home/tablet/image-header.png";
import HeroMobile from "../../../assets/home/mobile/image-header.png";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";

const HomeHeader = () => {
  const HeroImagesObject = {
    desktop: HeroDesktop,
    tablet: HeroTablet,
    mobile: HeroMobile,
  };

  const HeroImage = useResponsiveImages(HeroImagesObject);

  return (
    <header className="home-header">
      <img className="hero-image" src={HeroImage} alt="Hero Image" />
      <div className="home-header-container">
        <section className="home-header-content">
          <Text color="white" type="new">
            New Product
          </Text>
          <h1 className="header-title">XX99 Mark II HeadphoneS</h1>
          <Text className="header-text" color="white">
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </Text>
          <Button href="/product/xx99-mark-two-headphones" type="link" className="header-btn">
            See Product
          </Button>
        </section>
      </div>
    </header>
  );
};

export default HomeHeader;
