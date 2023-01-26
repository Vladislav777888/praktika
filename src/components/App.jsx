import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="library" element={<div>Library Page</div>}>
          {/* <Route index element={<Navigate to="watched" />} /> */}
          <Route path="watched" element={<div>My Library Watched</div>} />
          <Route path="queue" element={<div>My Library Queue</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
