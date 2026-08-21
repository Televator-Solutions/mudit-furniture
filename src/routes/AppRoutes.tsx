import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

// Critical page loaded directly
import { Home } from '../pages/Home';

// Non-critical pages lazy-loaded for peak performance and minimal initial bundle size
const About = lazy(() => import('../pages/About').then((m) => ({ default: m.About })));
const Collections = lazy(() => import('../pages/Collections').then((m) => ({ default: m.Collections })));
const HomeFurniture = lazy(() => import('../pages/HomeFurniture').then((m) => ({ default: m.HomeFurniture })));
const OfficeFurniture = lazy(() => import('../pages/OfficeFurniture').then((m) => ({ default: m.OfficeFurniture })));
const CustomFurniture = lazy(() => import('../pages/CustomFurniture').then((m) => ({ default: m.CustomFurniture })));
const Gallery = lazy(() => import('../pages/Gallery').then((m) => ({ default: m.Gallery })));
const Reviews = lazy(() => import('../pages/Reviews').then((m) => ({ default: m.Reviews })));
const Contact = lazy(() => import('../pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })));

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="collections"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <Collections />
            </Suspense>
          }
        />
        <Route
          path="home-furniture"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <HomeFurniture />
            </Suspense>
          }
        />
        <Route
          path="office-furniture"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <OfficeFurniture />
            </Suspense>
          }
        />
        <Route
          path="custom-furniture"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <CustomFurniture />
            </Suspense>
          }
        />
        <Route
          path="gallery"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <Gallery />
            </Suspense>
          }
        />
        <Route
          path="reviews"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <Reviews />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
