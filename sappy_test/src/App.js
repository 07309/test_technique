import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './navigation/NavBar';
import Content from './Content';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
    </BrowserRouter>
  )
}

export default App

