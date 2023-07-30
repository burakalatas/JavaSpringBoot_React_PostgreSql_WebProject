import './App.css';
import React from 'react';
import News from './Components/MainFolders/News';
import Announcement from './Components/MainFolders/Announcement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './Components/userLayout';
import AdminLayout from './Components/adminLayout';
import AddNews from './Components/MainFolders/AddNews';
import AddAnnouncement from './Components/MainFolders/AddAnnouncement';
import AdminNews from './Components/MainFolders/AdminNews';
import AdminAnnouncement from './Components/MainFolders/AdminAnnouncements';
import NoPage from './Components/MainFolders/NoPage';
import UpdateNews from './Components/MainFolders/UpdateNews';
import UpdateAnnouncement from './Components/MainFolders/UpdateAnnouncement';

import LoginComponent from './Components/SecurityFolders/LoginComponent';
import LogoutComponent from './Components/SecurityFolders/LogoutComponent';
import AuthenticatedRoute from './Components/SecurityFolders/AuthenticatedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <UserLayout>
              <Routes>
                <Route index element={<News />} />
              </Routes>
            </UserLayout>
          }
        />
        <Route path="/login" element={<LoginComponent/>} component={<LoginComponent/>} />
        <Route path="/logout" exact element={<AuthenticatedRoute/>}>
              <Route exact path='/logout' element={<LogoutComponent/>} component={LogoutComponent} />
        </Route>
        <Route
          path="/Announcement"
          element={
            <UserLayout>
              <Routes>
                <Route index element={<Announcement />} />
              </Routes>
            </UserLayout>
          }
        />
        <Route path="/Admin/AddNews" exact element={<AuthenticatedRoute/>}>
        <Route
          path="/Admin/AddNews"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<AddNews />} />
              </Routes>
            </AdminLayout>
          }
        />
        </Route>
        <Route path="/Admin/AddAnnouncement" exact element={<AuthenticatedRoute/>}>
        <Route
          path="/Admin/AddAnnouncement"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<AddAnnouncement />} />
              </Routes>
            </AdminLayout>
          }
        />
        </Route>
        <Route path="/Admin/Announcements" exact element={<AuthenticatedRoute/>}>
        <Route
          path="/Admin/Announcements"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<AdminAnnouncement />} />
              </Routes>
            </AdminLayout>
          }
        />
        </Route>
        <Route path="/Admin" element={<AuthenticatedRoute/>}>
          <Route
          path="/Admin"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<AdminNews />} />
              </Routes>
            </AdminLayout>
          }
        />
        </Route>
        <Route path="/Admin/News" exact element={<AuthenticatedRoute/>}>
        <Route
          path="/Admin/News"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<AdminNews />} />
              </Routes>
            </AdminLayout>
          }
        />
        </Route>
        <Route path="/Admin/UpdateNews/:id" exact element={<AuthenticatedRoute/>}>
        <Route
          path="/Admin/UpdateNews/:id"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<UpdateNews />} />
              </Routes>
            </AdminLayout>
          }
        />
        </Route>
        <Route path="/Admin/UpdateAnnouncement/:id" exact element={<AuthenticatedRoute/>}>
        <Route
          path="/Admin/UpdateAnnouncement/:id"
          element={
            <AdminLayout>
              <Routes>
                <Route index element={<UpdateAnnouncement />} />
              </Routes>
            </AdminLayout>
          }
        />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
