import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const  App = ({state, dispatch}) => {
  return (
        <div className="app-wrapper">
          <Header />
          <Navbar users={state.users}/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path='/profile/*' element={<Profile profilePage={state.profilePage} dispatch={dispatch} />} />
              <Route path='/dialogs/*' element={<Dialogs dialogsPage={state.dialogsPage} users={state.users} dispatch={dispatch} />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/*' element={<Profile profilePage={state.profilePage} dispatch={dispatch} />} />
            </Routes>
          </div>
        </div>
  );
}


export default App;
