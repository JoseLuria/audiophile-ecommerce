import "./BestAudioSection.style.scss";
import Text from "../Text/Text";
import { useResponsiveImages } from "../../hooks/useResponsiveImages";
import BestImageDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import BestImageTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import BestImageMobile from "../../assets/shared/mobile/image-best-gear.jpg";

const BestAudioSection = () => {
  const bestAudioImageObject = {
    mobile: BestImageMobile,
    tablet: BestImageTablet,
    desktop: BestImageDesktop,
  };

  const bestAudioImage = useResponsiveImages(bestAudioImageObject);

  return (
    <section className="best-audio-section">
      <img className="best-audio-image" src={bestAudioImage} alt="" />
      <div className="best-audio-content">
        <h2 className="best-audio-title">
          Bringing you the <span className="best-audio-title-span">best</span> audio gear
        </h2>
        <Text>
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </div>
    </section>
  );
};

export default BestAudioSection;
