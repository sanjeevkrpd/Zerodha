import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allHoldings")
      .then((res) => {
        const holdingsData = res.data.data || [];
        console.log("Holdings Data Length:", holdingsData.length);
        setAllHoldings(Array.isArray(holdingsData) ? holdingsData : []);
      })
      .catch((error) => {
        console.error("Error fetching holdings:", error);
        setAllHoldings([]); // Ensure allHoldings is always an array
      });
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const qty = stock.qty || 0;
              const price = stock.price || 0;
              const avg = stock.avg || 0;
              const net = parseFloat(stock.net) || 0;  // Ensuring net is a number
              const day = parseFloat(stock.day) || 0;  // Ensuring day is a number
              const curValue = price * qty;
              const isProfit = curValue - avg * qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name || "Unknown"}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - avg * qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{net.toFixed(2)}</td>
                  <td className={dayClass}>{day.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={allHoldings} />
    </>
  );
};

export default Holdings;
