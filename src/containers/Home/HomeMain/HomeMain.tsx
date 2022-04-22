import "./HomeMain.style.scss";
import MainContainer from "../../Shared/MainContainer";
import CategoriesSection from "../../../components/CategoriesSection/CategoriesSection";
import BestAudioSection from "../../../components/BestAudioSection/BestAudioSection";
import { HomeProductOne, HomeProductTwo, HomeProductThree } from "../HomeProducts";

const HomeMain = () => {
  return (
    <MainContainer>
      <CategoriesSection />
      <section className="home-products-section">
        <HomeProductOne />
        <HomeProductTwo />
        <HomeProductThree />
      </section>
      <BestAudioSection />
    </MainContainer>
  );
};

export default HomeMain;
