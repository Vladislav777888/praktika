import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePageInner from '../pages/HomePageInner/HomePageInner';
import MyLibraryPage from 'pages/MyLibraryPage/MyLibraryPage';
import WatchedPage from 'pages/WatchedPage/WatchedPage';
import QueuePage from 'pages/QueuePage/QueuePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePageInner />} />
        <Route path="library" element={<MyLibraryPage />}>
          <Route index element={<Navigate to="watched" />} />
          <Route path="watched" element={<WatchedPage />} />
          <Route path="queue" element={<QueuePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
