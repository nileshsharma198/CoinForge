import React from "react";
import "./NewsGrid.css";

function NewsGrid({ article }) {
  return (
    <div className="news-grid-card">
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="news-grid-image"
        />
      )}
      <div className="news-grid-content">
        <div>
          <div className="news-grid-meta">
            <span className="news-grid-site">{article.source_id}</span>
            <span className="news-grid-date">
              {new Date(article.pubDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <h3 className="news-grid-title">{article.title}</h3>
          <p className="news-grid-description">{article.description}</p>
        </div>
        <div className="news-grid-readmore">
          <a href={article.link} target="_blank" rel="noreferrer">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsGrid;
