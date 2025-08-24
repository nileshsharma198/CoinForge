import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/header";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import Search from "../components/Dashboard/Search/Search";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination";
import Loader from "../components/common/Loader/Loader";
import BackToTop from "../components/common/BackToTop/BackToTop";
import Sort from "../components/Dashboard/Sort/Sort"; // NEW
import { get200Coins } from "../functions/get200Coins";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginationCoins, setPaginationCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("market_cap"); // NEW default
  const [error, setError] = useState(null); // ✅ added

  const coinsPerPage = 12;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter + Sort
  let filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (sortType) {
    filteredCoins = [...filteredCoins].sort((a, b) => {
      switch (sortType) {
        case "market_cap":
          return b.market_cap - a.market_cap;
        case "volume":
          return b.total_volume - a.total_volume;
        case "highest_up":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "highest_low":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        case "rank":
          return a.market_cap_rank - b.market_cap_rank;
        default:
          return 0;
      }
    });
  }

  useEffect(() => {
    const startIndex = (page - 1) * coinsPerPage;
    const paginated = filteredCoins.slice(
      startIndex,
      startIndex + coinsPerPage
    );
    setPaginationCoins(paginated);
  }, [coins, search, page, sortType]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setError(null); // ✅ reset error before fetch
    try {
      const myCoins = await get200Coins();
      setCoins(myCoins); 
      setPaginationCoins(myCoins.slice(0, 12));
    } catch (err) {
      console.error("Error fetching coins:", err);
      setError("Failed to load coin data. Please try again later."); // ✅ show error
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <Header />
      <BackToTop />

      {isLoading ? (
        <Loader />
      ) : error ? (  // ✅ added error display
        <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
          {error}
        </div>
      ) : (
        <div>
          {/* Search + Sort in same row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem", // much smaller gap
              padding: "1rem",
              width: "90%",
              margin: "0 auto", // centers the row
            }}
          >
            <Search search={search} onSearchChange={onSearchChange} />
            <Sort sortType={sortType} setSortType={setSortType} />
          </div>

          <Tabs coins={search ? filteredCoins : paginationCoins} />

          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
              count={Math.ceil(
                coins.filter(
                  (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.symbol.toLowerCase().includes(search.toLowerCase())
                ).length / coinsPerPage
              )}
            />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;
