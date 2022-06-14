

import './App.css'




// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBar, Container } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MyAppBar from './components/organisms/AppBar/MyAppBar';




import EntrepreneurshipPage from './components/pages/EntrepreneurshipPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyLibraryPage from './components/pages/MyLibraryPage';
import BookDetailViewPage from './components/pages/BookDetailViewPage/BookDetailViewPage';

function App() {
  return (
 
 

      <Router>
      <Routes>
        <Route path='/EntrepreneurshipPage' element={<EntrepreneurshipPage/>}></Route>
       
        <Route path='/' element={<MyLibraryPage/>}></Route>
        <Route path='/BookDetailViewPage' element={<BookDetailViewPage/>}></Route>
        
      </Routes>
    </Router>
       
 



   
  );
}

export default App;
