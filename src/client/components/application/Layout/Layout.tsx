import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

//import { Footer } from '../../navigators/Footer/Footer';
//import { Header } from '../../navigators/Header/Header';

const Footer = lazy(() => import('../../navigators/Footer'));
const Header = lazy(() => import('../../navigators/Header'));

import * as styles from './Layout.styles';

export const Layout: FC = () => (
  <>
    <Suspense fallback="">
      <Header />
    </Suspense>
    <main className={styles.container()}>
      <Outlet key="outlet" />
    </main>
    <Suspense fallback="">
      <Footer />
    </Suspense>
  </>
);
