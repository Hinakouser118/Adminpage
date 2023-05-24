import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Quotations from "./components/Quotations";
import Items from "./components/Items";
import PostCreate from "./components/PostCreate";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostEditer from "./components/PostEdit";
import UserItems from "./components/UserItems";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Admin dataProvider={restProvider("http://localhost:3000")}>
          <Resource
            name="posts"
            list={Items}
            create={PostCreate}
            edit={PostEditer}
          />
          <Resource
            name="users"
            list={UserItems}
            create={UserCreate}
            edit={UserEdit}
          />
        </Admin>

        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Quotations" element={<Quotations />} />
          {/* <Route path='/posts/*' element={<Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name='posts' list={Items}/>

      </Admin>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
