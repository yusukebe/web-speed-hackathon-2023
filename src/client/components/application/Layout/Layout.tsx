import type { FC } from 'react';
import React, { lazy, memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../../navigators/Footer/Footer';
import { Header } from '../../navigators/Header/Header';

//const Footer = lazy(() => import('../../navigators/Footer'));
//const Header = lazy(() => import('../../navigators/Header'));

import * as styles from './Layout.styles';

export const Layout = memo(() => {
  return (
    <>
      <Header />
      <main className={styles.container()}>
        <Outlet key="outlet" />
      </main>
      <Footer />
    </>
  );
});
Layout.displayName = 'Layout';
