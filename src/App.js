import logo from './logo.svg';
import './App.css';
import { AddPhoto } from './Components/AddPhoto';
import { Search } from './Components/Search';
import { Delete } from './Components/Delete';
import { ViewAll } from './ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPhoto/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/View" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
