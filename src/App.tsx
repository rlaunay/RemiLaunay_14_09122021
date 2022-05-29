import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/new-employee" element={<CreateEmployee />} />
      </Routes>
    </Layout>
  );
};

export default App;
