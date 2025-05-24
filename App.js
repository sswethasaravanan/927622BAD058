import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 175.35 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2825.23 },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 325.47 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 129.81 },
];

export default function StockAggregatorApp() {
  const [stocks, setStocks] = useState(mockStocks);
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddToWatchlist = (stock) => {
    if (!watchlist.find((s) => s.symbol === stock.symbol)) {
      setWatchlist([...watchlist, stock]);
    }
  };

  const handleRemoveFromWatchlist = (symbol) => {
    setWatchlist(watchlist.filter((s) => s.symbol !== symbol));
  };

  const filteredStocks = stocks.filter((s) =>
    s.symbol.toLowerCase().includes(search.toLowerCase()) ||
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📈 Stock Price Aggregator</h1>
      <Input
        type="text"
        placeholder="Search stocks..."
        className="mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredStocks.map((stock) => (
          <Card key={stock.symbol}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{stock.name}</h2>
                  <p className="text-sm text-gray-500">{stock.symbol}</p>
                  <p className="text-xl font-bold">${stock.price.toFixed(2)}</p>
                </div>
                <Button
                  onClick={() => handleAddToWatchlist(stock)}
                  className="ml-2"
                >
                  + Watchlist
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-2">⭐ Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No stocks in your watchlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {watchlist.map((stock) => (
            <Card key={stock.symbol}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{stock.name}</h2>
                    <p className="text-sm text-gray-500">{stock.symbol}</p>
                    <p className="text-xl font-bold">${stock.price.toFixed(2)}</p>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => handleRemoveFromWatchlist(stock.symbol)}
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}