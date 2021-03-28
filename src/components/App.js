import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

import { AuthProvider } from '../contexts/AuthContext'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute';
import Navigation from "./Navigation";
import Testpage from './Testpage'
import AddPost from "./AddPost";

const App = () => {
  return (

    <>

      

      <AuthProvider>
      <Navigation />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/testpage" component={Testpage} />
        </Switch>
      </AuthProvider>

      <Switch>

      </Switch>



    </>



  );
};

export default App;
