import type { FC } from 'react';

import ProductHeroImage from '../../components/product/ProductHeroImage';
import { useRecommendation } from '../../hooks/useRecommendation';

const Hero: FC = () => {
  let { recommendation } = useRecommendation();

  console.log(recommendation);
  if (!recommendation) {
    const blankRecommendation = {
      product: {
        id: 0,
        media: [
          {
            file: {
              filename: '',
              id: 0,
            },
            id: 0,
            isThumbnail: false,
          },
        ],
        price: 0,
      },
    };
    console.log('BLANKKKKK');

    console.log(blankRecommendation);
    recommendation = blankRecommendation as any;
  }

  if (!recommendation) return null;

  return <ProductHeroImage product={recommendation.product} title="今週のオススメ" />;
};
export default Hero;
