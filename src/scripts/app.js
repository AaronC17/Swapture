import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home.html';
import Login from '../pages/Login.html';
import Register from '../pages/Register.html';
import Profile from '../pages/Profile.html';
import Dashboard from '../pages/Dashboard.html';
import Settings from '../pages/Settings.html';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

const App = () => (
    <Router>
        <Header />
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </main>
        <Footer />
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
