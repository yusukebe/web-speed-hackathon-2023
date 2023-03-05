import type { FC } from 'react';
import { memo } from 'react';

import { ProductList } from '../../components/feature/ProductList';
import { useFeatures } from '../../hooks/useFeatures';

import * as styles from './Top.styles';

const Feature: FC = memo(() => {
  const { features } = useFeatures();

  if (!features) {
    return null;
  }

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
});

Feature.displayName = 'Feature';

export default Feature;
