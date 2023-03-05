import type { FC } from 'react';

import ProductHeroImage from '../../components/product/ProductHeroImage';
import { useRecommendation } from '../../hooks/useRecommendation';

const Hero: FC = () => {
  const { recommendation } = useRecommendation();

  if (recommendation === undefined) {
    return null;
  }
  return <ProductHeroImage product={recommendation.product} title="今週のオススメ" />;
};
export default Hero;
