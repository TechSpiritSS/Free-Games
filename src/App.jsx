import React from "react";
import "./App.css";
import "./App.scss";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";

function Giveaway() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function App() {
  return <Giveaway />;
}

export default App;
