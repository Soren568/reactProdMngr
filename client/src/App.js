import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Detail from './views/Detail';
import Main from './views/Main';
import Update from './views/Update';

function App() {
  
  return (
    <div className="App grid place-items-center">
        <div className="flex justify-evenly"> 
        <BrowserRouter>
          <Route exact path="/products/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/products/:id/edit">
            <Update/>
          </Route>
        </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
