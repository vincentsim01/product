import { Button } from "@chakra-ui/react";
import { Route, Routes} from 'react-router-dom';
import HomePage from './pages/homePage';
import CreatePage from './pages/createPage';
import Navbar from './component/navbar';

function App(){
  return(
    <>
    <Button>Hello</Button>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<CreatePage/>}/>
    </Routes>
    </>
  )
}

export default App;