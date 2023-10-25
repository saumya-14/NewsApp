import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/news'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  
  state = {
    progress: 0
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} apiKey={this.apiKey} />
          <Routes>
            <Route
              exact
              path='/General'
              element={
                <React.Fragment>
                  <News
                    setProgress={this.setProgress}
                    key='general'
                    pageSize={9}
                    country='in'
                    category='general'
                  />
                </React.Fragment>
              }
            ></Route>
            <Route
              exact
              path='/Business'
              element={
                <React.Fragment>
                  <News
                    setProgress={this.setProgress}
                    key='business'
                    pageSize={9}
                    country='in'
                    category='business'
                  />
                </React.Fragment>
              }
            ></Route>
            <Route
              exact
              path='/Entertainment'
              element={
                <React.Fragment>
                  <News
                    setProgress={this.setProgress}
                    key='entertainment'
                    pageSize={9}
                    country='in'
                    category='entertainment'
                  />
                </React.Fragment>
              }
            ></Route>
            <Route
              exact
              path='/Health'
              element={
                <React.Fragment>
                  <News
                    setProgress={this.setProgress}
                    key='health'
                    pageSize={9}
                    country='in'
                    category='health'
                  />
                </React.Fragment>
              }
            ></Route>
            <Route
              exact
              path='/Science'
              element={
                <React.Fragment>
                  <News
                    setProgress={this.setProgress}
                    key='science'
                    pageSize={9}
                    country='in'
                    category='science'
                  />
                </React.Fragment>
              }
            ></Route>
            <Route
              exact
              path='/Sports'
              element={
                <React.Fragment>
                  <News
                    setProgress={this.setProgress}
                    key='sports'
                    pageSize={9}
                    country='in'
                    category='sports'
                  />
                </React.Fragment>
              }
            ></Route>
            <Route
              exact
              path='/Technology'
              element={
                <React.Fragment>
                  <News
                    setProgress={this.setProgress}
                    key='technology'
                    pageSize={9}
                    country='in'
                    category='technology'
                  />
                </React.Fragment>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
