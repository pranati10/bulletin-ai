import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Summarize from "./pages/Summarize";
import ELI5 from "./pages/ELI5";
import Sentiment from "./pages/Sentiment";
import ClickbaitReducer from "./pages/ClickbaitReducer";
import QAChat from "./pages/QAChat";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/summarize" element={<Summarize />} />
              <Route path="/eli5" element={<ELI5 />} />
              <Route path="/sentiment" element={<Sentiment />} />
              <Route path="/clickbait-reducer" element={<ClickbaitReducer />} />
              <Route path="/qa-chat" element={<QAChat />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;