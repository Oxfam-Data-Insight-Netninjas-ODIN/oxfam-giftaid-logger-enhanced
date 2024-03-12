import React from "react";
import "./styleComponents.css";
import Hero from "./Hero";
import GlobalUserData from './globalUserData.json'

function TopScores() {
  return (
    <div>
      <Hero>
        <h1>Title here</h1>
      </Hero>
      <h1>Welcome !</h1>
      <p>text here</p>
      <div className="localScores">
        <h3>Local Scores here</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>User Code</th>
              <th>Name</th>
              <th>Gift Aid</th>
              <th>No Gift Aid</th>
              <th>Percentage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {GlobalUserData.map((item, index) => (
              <tr key={index}>
                <td>{item.userCode}</td>
                <td>{item.firstName}</td>
                <td>{item.giftAid}</td>
                <td>{item.nogiftAid}</td>
                <td>{item.percentage}%</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopScores;
