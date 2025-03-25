import { Routes, Route } from "react-router-dom";
import AccordionPage from "./Pages/AccordionPage";
import LearningPage from "./Pages/Lessons";
import SubtopicPage from "./Pages/ChapterSelect";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import QuestionairePage from "./Pages/QuestionairePage";


export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div style={{ flex: 1, paddingRight: "60px" }}>
          <Routes>
            <Route path="/" element={<AccordionPage />} />
            <Route path="/learn" element={<LearningPage />} />
            <Route path="/chapter/:chapterId/:topicId/:subtopicId" element={<SubtopicPage />} />
            <Route path="/questionaire" element={<QuestionairePage />} />
            
          </Routes>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
