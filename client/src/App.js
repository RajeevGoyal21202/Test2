import './style/app.css';
import { Routes,Route } from 'react-router-dom';
import AddQuiz from './pages/Admin/AddQuiz';
import AdminDashboard from './pages/Admin/Dashboard';
import AddQuestion from './pages/Admin/AddQuestion';
import HomePage from './pages/common/Home';
import Signup from './pages/common/signup';
import Login from './pages/common/login';
import AdminRoute from './component/Routes/AdminRoutes';
import ViewQuestion from './pages/Admin/ViewQuestions';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/addQuiz' element={<AddQuiz/>}/>
    <Route path='/adminDashboard' element={<AdminDashboard/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path='/addQuestion' element={<AddQuestion/>}/>
    <Route path='/viewQues' element={<ViewQuestion/>}/>
    
  
   </Routes>
  );
}

export default App;
