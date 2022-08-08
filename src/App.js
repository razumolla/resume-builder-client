import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Templates from './Pages/Cv/Templates';
import FormCv from './Pages/Cv/FormCv';
import Login from './Pages/Login/Login';
import Resume from './Pages/Resume/Resume';
import ResumeForm from './Pages/Resume/ResumeForm';
import SignUp from './Pages/Login/SignUp';
import TemplateForm from './Pages/CoverLetter/TemplateForm';
import CoverLetter from './Pages/CoverLetter/CoverLetter';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import NotFound from './Pages/Shared/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import Form from './Pages/Resume/Form';
import Blogs from './Pages/Blogs/Blogs';
import CvResumeAll from './Pages/Blogs/CvResumeAll';
import CoverLetterAll from './Pages/Blogs/CoverLetterAll';
import InspiringStories from './Pages/Blogs/InspiringStories';
import PersonalDevelopment from './Pages/Blogs/PersonalDevelopment';
import MockInterview from './Pages/Blogs/MockInterview';
import InterviewQuestions from './Pages/Blogs/InterviewQuestions';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} ></Route>
        <Route path="/resume/form" element={<ResumeForm />} ></Route>


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
            <Blogs></Blogs>
          </RequireAuth>
        } />
         

        <Route path="/templateForm" element={<TemplateForm />}></Route>
        <Route path="/coverLetter" element={<CoverLetter />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/form' element={<Form></Form>}></Route>
        {/* Blogs */}
        <Route path="/blogs" element={<Blogs> </Blogs>} />
        <Route path="/cvResumeWriting" element={<CvResumeAll> </CvResumeAll>} />
        <Route path="/coverLetterWriting" element={<CoverLetterAll> </CoverLetterAll>} />
        <Route path="/personalDevelopment" element={<PersonalDevelopment> </PersonalDevelopment>} />
        <Route path="/inspiringStories" element={<InspiringStories> </InspiringStories>} />
        <Route path="/interviewQuestions" element={<InterviewQuestions> </InterviewQuestions>} />
        <Route path="/mockInterview" element={<MockInterview> </MockInterview>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </div >
  );
}

export default App;
