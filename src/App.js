import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/home';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddPost from './components/posts/AddPost';
import EditPost from './components/posts/EditPost';
import ViewPost from './components/posts/View';

 const App= ()=> {
  return (
   <Router>
      <div className="App">  
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts/add" component={AddPost}/>
      <Route exact path="/posts/edit/:id" component={EditPost}/>
      <Route exact path="/posts/:id" component={ViewPost}/>
      <Route component={NotFound}/>
    </Switch>
    </div>
   </Router>
  );
}

export default App;
