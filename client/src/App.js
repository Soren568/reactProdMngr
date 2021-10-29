import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Detail from './views/Detail';
import Main from './views/Main';

function App() {
  return (
    <div className="App grid place-items-center">
        <div className="flex justify-evenly"> 
        <BrowserRouter>
          <Route exact path="/products/:id">
            <Detail/>
          </Route>
          <Route exact path="/">
            <Main/>
          </Route>
        </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
