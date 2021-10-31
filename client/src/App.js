import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Detail from './views/Detail';
import Main from './views/Main';
import MainRefactored from './views/Refactored/MainRefactored';
import Update from './views/Update';
import UpdateRefactored from './views/Refactored/UpdateRefactored';

function App() {
  
  return (
    <div className="App grid place-items-center">
        <div className="flex justify-evenly"> 
        <BrowserRouter>
          <Route exact path="/products/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <MainRefactored/>
          </Route>
          <Route path="/products/:id/edit">
            <UpdateRefactored/>
          </Route>
        </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
