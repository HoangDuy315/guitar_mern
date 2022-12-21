import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { publichRoutes, privateRoutes, adminRouter } from "./routes/routes";
import {DefaultLayout} from "./Layout";




function App() {
  const [isLogin, setIslogin] = useState(false)
  const [render , setRender] = useState(false)
  const [isAdmin, setIsadmin] = useState(false)
  useEffect(() => {
    const isUSer = localStorage.getItem('userId');
    if(isUSer) {
      setIslogin(true)
    } 

    fetch(`${process.env.REACT_APP_API}/api/getoneuser/`+ isUSer, {
      method: "GET"
    })
    .then(res => res.json())
    .then(res => {
      if(res.role === 'Admin')
        setIsadmin(true)
        else 
         setIsadmin(false)
    })

  },[render])
 

  const handleLogin = (data) => {
    setIslogin(true)
    console.log("login id " + data)
  };

  const handleLogout = () => {
    localStorage.removeItem('userId')
    setIslogin(false)
    setRender(!render)
  };

  
  
  return isLogin ? (
      <Routes>
      {isAdmin ? adminRouter.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout === null) {
          Layout = Fragment;
        } else if (route.layout) {
          Layout = route.layout;
        }
        const Page =  route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout  onHandleLogout={handleLogout}>
                <Page  />
                </Layout>
            }
          />
        );
      }) : privateRoutes.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout === null) {
          Layout = Fragment;
        } else if (route.layout) {
          Layout = route.layout;
        }
        const Page =  route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout  onHandleLogout={handleLogout}>
                <Page  />
                </Layout>
            }
          />
        );
      })}
    </Routes>
  ) : (
    <Routes>

      {publichRoutes.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout === null) {
          Layout = Fragment;
        } else if (route.layout) {
          Layout = route.layout;
        }
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page onLogin={handleLogin}/>
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
