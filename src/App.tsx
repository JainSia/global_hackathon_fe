import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './components/Layout/MainLayout';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;