import { lazy } from "react";

const Container = lazy(() => import("../../Context/Container"));
const HomeBanner = lazy(() => import("./HomeBanner"));
const HomeCore = lazy(() => import("./HomeCore"));
const FooterHome = lazy(() => import("./FooterHome"));
const HomePage = () => {
  return (
    <Container className="w-full relative  py-12">
      {/* Hero Section */}
      <HomeBanner />
      {/* Hero Section */}
      <HomeCore />
      {/* Footer Section */}
      <FooterHome />
    </Container>
  );
};

export default HomePage;
