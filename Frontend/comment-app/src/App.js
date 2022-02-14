import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import Comment from './Components/Comment';

function App() {
  return (
    <div className="App">
      <Router>
     <div className='container'>
       
     <Routes>
      
     <Route exact path="/" element={<SignIn />}>
            
            </Route>

            <Route exact path="/signin" element={<SignIn />}>
            
            </Route>
          
          <Route exact path="signup" element={<SignUp />}>
            
          </Route>
          <Route exact path="/forgotPassword" element={<ForgotPassword/>}>
           
          </Route>

          <Route exact path="comment" element={<Comment/>}>
           
            </Route>

      

        </Routes>
      </div>
    </Router>
     </div>
  );
}

export default App;
