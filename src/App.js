
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Templates from './Pages/Cv/Templates';
import FormCv from './Pages/Cv/FormCv';
import Login from './Pages/Login/Login';
import CoverLetter from './Pages/CoverLetter/CoverLetter';
import Resume from './Pages/Resume/Resume';
import ResumeForm from './Pages/Resume/ResumeForm';
import SignUp from './Pages/Login/SignUp';
import TemplateForm from './Pages/CoverLetter/TemplateForm';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Experience from './Pages/CoverLetter/Experience';
import CoverLetterEducation from './Pages/CoverLetter/CoverLetterEducation';
import CoverLetterSkills from './Pages/CoverLetter/CoverLetterSkills';
import CoverLetterAbout from './Pages/CoverLetter/CoverLetterAbout';
import NotFound from './Pages/Shared/NotFound'
import EducationalInfo from './Pages/Resume/EducationalInfo';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} ></Route>
        <Route path="/resume/form" element={<ResumeForm />} ></Route>
        <Route path="/resume/education" element={<EducationalInfo />} ></Route>



        <Route path='/cv' element={<Templates></Templates>}></Route>
        <Route path='/cv/form' element={<FormCv></FormCv>}></Route>
        <Route path="/cv" element={<Templates></Templates>}></Route>
        <Route path="/cv/form" element={<FormCv></FormCv>}></Route>
        <Route
          path="/templateForm"
          element={<TemplateForm></TemplateForm>}
        ></Route>
        <Route path="/coverLetter" element={<CoverLetter></CoverLetter>} />

        <Route path="/cv" element={<Templates></Templates>}></Route>
        <Route path="/cv/form" element={<FormCv></FormCv>}></Route>
        <Route path="/templateForm" element={<TemplateForm />}></Route>
        <Route path="/coverLetter" element={<CoverLetter />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<CoverLetterEducation />} />
        <Route path="/skills" element={<CoverLetterSkills />} />
        <Route path="/about" element={<CoverLetterAbout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </div >
  );
}

export default App;
