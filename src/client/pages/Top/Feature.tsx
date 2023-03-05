import type { FC } from 'react';

import { ProductList } from '../../components/feature/ProductList';
import { useFeatures } from '../../hooks/useFeatures';

import * as styles from './Top.styles';

const Feature: FC = () => {
  const { features } = useFeatures();

  if (features === undefined) {
    return null;
  }

  console.log(features);

  return (
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
  );
};

export default Feature;
