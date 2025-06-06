import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeatureHighlights from '../components/home/FeatureHighlights';
import FeaturedBeaches from '../components/home/FeaturedBeaches';
import MapSection from '../components/home/MapSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <Layout transparentHeader>
      <HeroSection />
      <FeatureHighlights />
      <FeaturedBeaches />
      <MapSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;