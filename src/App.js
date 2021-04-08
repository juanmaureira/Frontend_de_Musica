import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SongsContextProvider from './contexts/SongsContents';
import LyricsContextProvider from './contexts/LyricsContexts';
import Header from './components/common/Header';
import Songs from './components/Songs';
import Lyrics from './components/Lyrics';
import './assets/css/styles.css';

const App = () => {
  <BrowserRouter>
    <Header>
      <Switch>
        <Route exact path='/'>
          <SongsContextProvider>
            <Songs/>
          </SongsContextProvider>
        </Route>
        <Route path = '/lyrics/track/:commontrack_id'>
          <LyricsContextProvider>
            <Lyrics/>
          </LyricsContextProvider>
        </Route>
      </Switch>
    </Header>
  </BrowserRouter>
};

export default App;
