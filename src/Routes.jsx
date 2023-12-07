import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactPage from "./Pages/ReactPage";
import HomePage from "./Pages/HomePage";

const ProjectRoutes = () => {
    return (
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route exact path="/reactpage" element={<ReactPage />} /> */}
          </Routes>
        </Router>
      </React.Suspense>
    );
  };
  export default ProjectRoutes;