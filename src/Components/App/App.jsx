import React from 'react';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchTweets } from 'redux/operations';

const HomePage = lazy(() => import('pages/Home'));
const TweetsPage = lazy(() => import('pages/Tweet_Card'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets(1));
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
