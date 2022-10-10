import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import StoreContext from './StoreContext';

const  App = () => {
  return (
        <div className="app-wrapper">
          <Header />
          <StoreContext.Consumer>{
            (store) => (<Navbar users={store.getState().users}/>)  
          }
          </StoreContext.Consumer>
          <div className="app-wrapper-content">
            <Routes>
              <Route path='/profile/*' element={<Profile />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/*' element={<Profile />} />
            </Routes>
          </div>
        </div>
  );
}


export default App;
