import './App.css';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import state from "./state/state";
import Friends from "./components/Friends/Friends";


function App(props) {
    return (
        <BrowserRouter>
            <div className='App-wrapper'>
                <Header/>
                <Navbar state={props.state.sitebar}/>
                <div className='App-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage} />} />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
