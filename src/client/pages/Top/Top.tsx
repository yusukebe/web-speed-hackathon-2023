import type { FC } from 'react';
import { lazy } from 'react';
import { Helmet } from 'react-helmet';

import { ProductList } from '../../components/feature/ProductList';
//import { ProductHeroImage } from '../../components/product/ProductHeroImage';
// eslint-disable-next-line import/order
import { useFeatures } from '../../hooks/useFeatures';

const ProductHeroImage = lazy(() => import('../../components/product/ProductHeroImage'));

import { useRecommendation } from '../../hooks/useRecommendation';

import * as styles from './Top.styles';

export const Top: FC = () => {
  const { recommendation } = useRecommendation();
  const { features } = useFeatures();

  if (recommendation === undefined || features === undefined) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>買えるオーガニック</title>
      </Helmet>
      <div>
        <ProductHeroImage product={recommendation.product} title="今週のオススメ" />
        <Feature />
      </div>
    </>
  );
};

const Feature: FC = () => {
  const { features } = useFeatures();

  if (features === undefined) {
    return null;
  }
  return (
    <>
      <div className={styles.featureList()}>
        {features.map((featureSection) => {
          return (
            <div key={featureSection.id} className={styles.feature()}>
              <h2 className={styles.featureHeading()}>{featureSection.title}</h2>
              <ProductList featureSection={featureSection} />
            </div>
          );
        })}
      </div>
    </>
  );
};
