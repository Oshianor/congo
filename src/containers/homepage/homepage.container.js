import React from 'react';
import HeaderAdvance from "../../components/headers/headerAdvance";
import SliderComponent from './components/slider.component';
import OurCustomers from './components/ourCustomers';
import Pricing from './components/pricing';
import Footer from '../../components/footer/footer';
import ThemeSection from "./components/themeSection";
import Carosel from "./components/carosel";
import AutomatedSection from './components/automatedSection';
import SupportSection from "./components/supportSection";
import Divider from "@material-ui/core/Divider";


export default function HomepageContainer() {
	return (
    <div>
      <HeaderAdvance />
      <Carosel />
      {/* <SliderComponent /> */}
      <OurCustomers />
      <SupportSection />
      <AutomatedSection />
      <Divider />
      <Footer />
    </div>
  );
}