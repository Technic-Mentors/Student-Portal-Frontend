import "./App.css"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
import './assets/fonts/font.css'
import './assets/custome.scss'
import './assets/admin.scss'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './Home';
import LoginType from './LoginType';
import Login from './Login';
import StudentReg from './StudentReg';
import StudentDashboard from './student/StudentDashboard';
import NewQuiz from './student/NewQuiz';
import StudentHeader from './student/layout/Header';
import ParentHeader from './parent/layout/Header';
import GenrateQuiz from './student/GenrateQuiz';
import Question from './student/Question';
import ParentDashboard from './parent/ParentDashboard';
import QuizResult from './parent/QuizResult';
import EditProfile from './parent/EditProfile';
import Reports from './parent/Reports';
import ResultDetail from './parent/ResultDetail';
import About from './About';
import Contact from './Contact';
import Paper from './Paper';
import PaperDetail from './PaperDetail';
import ProfileDetail from './parent/ProfileDetail';
import FAQ from './FAQ';
import TermsandCondition from './TermsandCondition';
import QuizDetail from './student/QuizDetail';
import ResetPassword from './student/ResetPassword';
import ForgetPassword from './ForgetPassword';
import Dashboard from './admin/Dashboard';
import AdminLogin from './admin/AdminLogin';
import ParentList from './admin/ParentList';
import StudentList from './admin/StudentList';
import QuestionsList from './admin/QuestionsList';
import Payment from './admin/Payment';
import ForgetPass from './admin/ForgetPass';
import AdminResetPassword from './admin/AdminResetPassword';
import AdminProfile from './admin/AdminProfile';
import StudentView from './admin/StudentView';
import ParentView from './admin/ParentView';
import QuizView from './admin/QuizView';
import AdminList from './admin/AdminList';
import AddAdmin from './admin/AddAdmin';
import EditAdmin from './admin/EditAdmin';
import ViewStudentDetail from './admin/ViewStudentDetail';
import AddQuestion from './admin/AddQuestion';
import ViewQuestionDeatil from './admin/ViewQuestionDeatil';
import EditQuestion from './admin/EditQuestion';
import PaperList from './admin/PaperList';
import ViewPaperDetail from './admin/ViewPaperDetail';
import CreatePaperView from './admin/CreatePaperView';

const App = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

const Content = () => {
  const location = useLocation();

  // Define an array of paths where the header should be displayed
  const headerPaths = ['/', '/StudentReg', '/aboutus', '/contactus', '/paper', '/paperdetail', '/faq', '/termsandcondition', '/forget'];
  const studentheaderPaths = ['/studentdashboard', '/NewQuiz', '/QuizSetting', '/Question', '/quizdetail', '/ResetPassword'];
  const parentheaderPaths = ['/parentdashboard', '/QuizResult', '/edit-profile', '/reports', '/resultdetail', '/profile'];


  // Define an array of paths where the footer should be displayed
  const footerPaths = ['/', '/StudentReg', '/aboutus', '/contactus', '/paper', '/paperdetail', '/faq', '/termsandcondition', '/forget'];

  // Check if the current path matches the specified paths
  const shouldDisplayHeader = headerPaths.includes(location.pathname);
  const shouldDisplaystudentHeader = studentheaderPaths.includes(location.pathname);
  const shouldDisplayparentHeader = parentheaderPaths.includes(location.pathname);
  const shouldDisplayFooter = footerPaths.includes(location.pathname);

  return (
    <>
      {shouldDisplayHeader && <Header />}
      {shouldDisplaystudentHeader && <StudentHeader />}
      {shouldDisplayparentHeader && <ParentHeader />}
      {/* Render the header component if the current path matches */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<LoginType />} path="/LoginType" />
        <Route element={<Login />} path="/Login" />
        <Route element={<About />} path="/aboutus" />
        <Route element={<Contact />} path="/contactus" />
        <Route element={<Paper />} path="/paper" />
        <Route element={<FAQ />} path="/faq" />
        <Route element={<TermsandCondition />} path="/termsandcondition" />
        <Route element={<PaperDetail />} path="/paperdetail" />
        <Route element={<StudentReg />} path="/StudentReg" />
        <Route element={<ForgetPassword />} path="/forget" />
        <Route element={<StudentDashboard />} path="/studentdashboard" />
        <Route element={<NewQuiz />} path="/NewQuiz" />
        <Route element={<GenrateQuiz />} path="/QuizSetting" />
        <Route element={<Question />} path="/Question" />
        <Route element={<ParentDashboard />} path="/parentdashboard" />
        <Route element={<QuizResult />} path="/QuizResult" />
        <Route element={<EditProfile />} path="/edit-profile" />
        <Route element={<Reports />} path="/reports" />
        <Route element={<ResultDetail />} path="/resultdetail" />
        <Route element={<ProfileDetail />} path="/profile" />
        <Route element={<QuizDetail />} path="/quizdetail" />
        <Route element={<ResetPassword />} path="/ResetPassword" />
        <Route element={<AdminLogin />} path="/admin" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<ParentList />} path="/parentlist" />
        <Route element={<StudentList />} path="/studentlist" />
        <Route element={<QuestionsList />} path="/questionlist" />
        <Route element={<Payment />} path="/payment" />
        <Route element={<ForgetPass />} path="/forgetpass" />
        <Route element={<AdminResetPassword />} path="/adminresetpassword" />
        <Route element={<AdminProfile />} path="/adminprofile" />
        <Route element={<AdminList />} path="/adminlist" />
        <Route element={<AddAdmin />} path="/addadmin" />
        <Route element={<EditAdmin />} path="/editadmin" />
        <Route element={<StudentView />} path="/studentview" />
        <Route element={<ViewStudentDetail />} path="/studentviewdetail" />
        <Route element={<AddQuestion />} path="/addquestion" />
        <Route element={<ViewQuestionDeatil />} path="/viewquestiondetail" />
        <Route element={<EditQuestion />} path="/editquestion" />
        <Route element={<PaperList />} path="/paperlist" />
        <Route element={<ViewPaperDetail />} path="/viewpaperdetail" />
        <Route element={<CreatePaperView />} path="/createpaperview" />
        <Route element={<ParentView />} path="/parentview" />
        <Route element={<QuizView />} path="/quizview" />
      </Routes>
      {shouldDisplayFooter && <Footer />} {/* Render the footer component if the current path matches */}
    </>
  );
};

export default App;