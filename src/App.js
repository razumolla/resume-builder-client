import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Templates from './Pages/Cv/Templates';
import FormCv from './Pages/Cv/FormCv';
import Login from './Pages/Login/Login';
import Resume from './Pages/Resume/Resume';
import SignUp from './Pages/Login/SignUp';
import TemplateForm from './Pages/CoverLetter/TemplateForm';
import CoverLetter from './Pages/CoverLetter/CoverLetter';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Blog from './Pages/Login/Blog';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/resume" element={<Resume />}></Route>

        <Route path="/cv" element={<Templates></Templates>}></Route>
        <Route path="/cv/form" element={<FormCv></FormCv>}></Route>

        <Route
          path="/templateForm"
          element={<TemplateForm></TemplateForm>}
        ></Route>
        <Route path="/resume" element={<Resume />}></Route>
        {/* <Route path="/cv" element={<Templates></Templates>}></Route>
        <Route path="/cv/form" element={<FormCv></FormCv>}></Route> */}

        <Route
          path="resume"
          element={
            <RequireAuth>
              <Resume />
            </RequireAuth>
          }></Route>

        <Route path="cv" element={
          <RequireAuth>
            <Templates></Templates>
          </RequireAuth>
        } />

        <Route path="blog" element={
          <RequireAuth>
            <Blog></Blog>
          </RequireAuth>
        } />
         
        <Route path="/coverLetter" element={<CoverLetter></CoverLetter>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
