import React from "react";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

import { AuthProvider } from '../contexts/AuthContext'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute';
import Navigation from "./Header/Navigation";
import OffersPage from './OffersPage/OffersPage'
import AddPost from "./AddPost/AddPost";
import Footer from "./Footer/Footer";
import Guest from "./Guest/Guest";
import OfferDetails from "./OfferDetails/OfferDetails";

const App = () => {
  return (

    <>
      <AuthProvider>
      <Navigation />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/index" component={Guest} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/offers" component={OffersPage} />

         <Route path="/details/:offerId" component={OfferDetails} />
        </Switch>
      </AuthProvider>
      <Footer/>



    </>



  );
};

export default App;
