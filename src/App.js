import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ErrorBoundary from './components/ErrorBoundary';


const  App = ({state}) => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path='/profile/*' element={<Profile state={state.profilePage} />} />
              <Route path='/dialogs/*' element={<Dialogs state={state.dialogsPage} users={state.users} />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/*' element={<Profile state={state.profilePage} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}


export default App;
