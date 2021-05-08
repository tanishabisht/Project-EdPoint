import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {MyProfile, SearchCourse, SignInUp, SignIn, SignUp} from './Pages'
import {InputModal} from './Components'
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Redirect from='/' to='/signup' exact/>
          <Route exact path="/login"><SignInUp/></Route>
          <Route exact path="/signin"><SignIn/></Route>
          <Route exact path="/signup"><SignUp/></Route>
          <Route exact path='/inputmodal'><InputModal/></Route>
          <Route exact path="/profile"><MyProfile username='tanishabisht'/></Route>
          <Route path="/searchcourse"><SearchCourse username='tanishabisht'/></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App