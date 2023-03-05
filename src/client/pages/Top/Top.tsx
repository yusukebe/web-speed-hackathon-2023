import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';

//import { ProductHeroImage } from '../../components/product/ProductHeroImage';
// eslint-disable-next-line import/order
import Hero from './Hero';

//const Hero = lazy(() => import('./Hero'));
const Feature = lazy(() => import('./Feature'));

export const Top: FC = () => {
  return (
    <>
      <Helmet>
        <title>買えるオーガニック</title>
      </Helmet>
      <div>
        <Hero />
        <Suspense fallback="">
          <Feature />
        </Suspense>
      </div>
    </>
  );
};
