import React from "react";
import Header from "../components/common/Header/header";   // your global header           // NewsPage.jsx inside News folder
import NewsPage from "../components/NewsPage/News/NewsPage";"./NewsPage.css"; 
import BackToTop from "../components/common/BackToTop/BackToTop";
                          // optional: page styles

function News() {
  return (
    <div>
      <Header />
      <NewsPage />
      <BackToTop/>
    </div>
  );
}
export default News;
