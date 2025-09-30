import React from "react";
import "./NewsList.css";

function NewsList({ article }) {
  return (
    <tr className="news-list-row">
      <td className="news-list-image-cell">
        {article.image_url ? (
          <img
            src={article.image_url}
            alt={article.title}
            className="news-list-image"
          />
        ) : (
          <div className="news-list-placeholder">No Image</div>
        )}
      </td>

      <td className="news-list-content">
        {/* Meta row: site (left) + date (right) */}
        <div className="news-list-meta">
          <span className="news-list-site">{article.source_id || "Unknown"}</span>
          <span className="news-list-date">
            {new Date(article.pubDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="news-list-title">
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>

        {/* Description */}
        <p className="news-list-description">{article.description}</p>

        {/* Read more */}
        <div className="news-list-readmore">
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            Read More →
          </a>
        </div>
      </td>
    </tr>
  );
}

export default NewsList;
