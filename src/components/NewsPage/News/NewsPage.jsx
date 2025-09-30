import React, { useEffect, useState } from "react";
import Loader from "../../common/Loader/Loader";
import NewsGrid from "../NewsGrid/NewsGrid";
import NewsList from "../NewsList/NewsList";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import "./NewsPage.css";

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("grid");
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchNews = async (pageToken = null) => {
    try {
      setLoading(true);

      const url = pageToken
        ? `https://newsdata.io/api/1/news?apikey=pub_7345b03f3aff43d68a3f695a0d652c1f&q=crypto&language=en&page=${pageToken}`
        : `https://newsdata.io/api/1/news?apikey=pub_7345b03f3aff43d68a3f695a0d652c1f&q=crypto&language=en`;

      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Error: ${response.status} ${response.statusText}`);

      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }

      const merged = [...articles, ...data.results];

      const unique = merged.filter(
        (item, index, self) =>
          item.title &&
          index ===
            self.findIndex(
              (a) =>
                a.title.toLowerCase().trim() === item.title.toLowerCase().trim()
            )
      );

      unique.sort(
        (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );

      setArticles(unique);
      setNextPage(data.nextPage || null);
      setHasMore(!!data.nextPage);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(); // initial load
  }, []);

  if (error) return <p className="error-text">Failed to load news: {error}</p>;

  // Use grid view on mobile automatically
  const effectiveView = isMobile ? "grid" : view;

  return (
    <div className="news-container">
      {/* Header + Toggle */}
      <div className="news-header">
        <h2 className="news-title">Latest Crypto News</h2>

        {/* Hide toggle on mobile */}
        {!isMobile && (
          <div className="view-toggle">
            <button
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
            >
              Grid
            </button>
            <button
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            >
              List
            </button>
          </div>
        )}
      </div>

      {/* News Articles */}
      {articles.length === 0 && !loading ? (
        <p>No articles found.</p>
      ) : effectiveView === "grid" ? (
        <div className="grid-view">
          {articles.map((article) => (
            <NewsGrid key={article.link} article={article} />
          ))}
        </div>
      ) : (
        <table className="list-view">
          <tbody>
            {articles.map((article) => (
              <NewsList key={article.link} article={article} />
            ))}
          </tbody>
        </table>
      )}

      {/* Loader */}
      {loading && <Loader />}

      {/* Load More Button */}
      {!loading && hasMore && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => fetchNews(nextPage)}>
            Load More <KeyboardDoubleArrowDownRoundedIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsPage;
