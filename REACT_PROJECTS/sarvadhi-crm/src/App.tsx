import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { TimeTracking } from './pages/TimeTracking';
import { TaskList } from './pages/TaskList';
import { Projects } from './pages/Projects';
import { Schedule } from './pages/Schedule';
import Layout from './pages/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/time-tracking' element={<TimeTracking />} />
          <Route path='/task-list' element={<TaskList />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
