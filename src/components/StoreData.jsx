import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";
import { writeUserData } from "./firebaseFunct.js";

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());

// Fetch and filter data from server
const fetchData = () => {
  return new Promise((resolve, reject) => {
    get(child(dbRef, `users/`)).then((snapshot) => {
      let storageData = snapshot.val();
      let historyData = [];
      Object.keys(storageData).forEach((key) => {
        const newObject = storageData[key];
        Object.values(newObject).forEach((nestedValue) => {
          historyData.unshift(nestedValue);
        });
      });
      const filteredData = historyData.filter(
        (obj) => !Object.keys(obj).includes("password") && !Object.keys(obj).includes("suffix") && !Object.keys(obj).includes("location")
      );
 
      filteredData.sort((a, b) => {
        // First, sort by date
        if (a.date > b.date) {
          return -1;
        } else if (a.date < b.date) {
          return 1;
        } else {
          // If dates are the same, sort by username in ascending order
          if (a.username < b.username) {
            return -1;
          } else if (a.username > b.username) {
            return 1;
          } else {
            return 0;
          }
        }
      });


      resolve(filteredData);
    }).catch((error) => {
      reject(error);
    });
  });
};

// // Usage
// fetchData().then((filteredData) => {
//   console.log("no errors"); // Access filteredData here
// }).catch((error) => {
//   console.error(error);
// });


// Directly style the header cell
const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: 'white',
  fontSize: '1.2rem',
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: '1rem',
}));

const HoverTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  transition: 'background-color 0.3s ease-in-out, color 1s ease', // Delay for the hover effect
  '&:hover': {
    backgroundColor: '#458532',
    color: 'white', // Text colour on hover
  },
  // Ensures cells within the row also transition to white text on hover
  '&:hover .MuiTableCell-root': {
    color: 'white',
  },
}));

function LocalScores() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setFilteredData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
    <div id="localScores">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead id='header'>
            <TableRow>
              <HeaderCell>User Code</HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Gift Aid</HeaderCell>
              <HeaderCell>No Gift Aid</HeaderCell>
              <HeaderCell>Percentage</HeaderCell>
              <HeaderCell>Date</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <HoverTableRow key={index}>
                <BodyCell>{item.username}</BodyCell>
                <BodyCell>{item.name}</BodyCell>
                <BodyCell>{item.gAid}</BodyCell>
                <BodyCell>{item.noGAid}</BodyCell>
                <BodyCell>{Math.round((item.gAid * 100) / (item.gAid + item.noGAid)) || 0}%</BodyCell>
                <BodyCell>{item.date}</BodyCell>
              </HoverTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    {/* Prints the table using the browser's print function */}
    <div id="btnFlex"> 
    <button className="btn" onClick={() => window.print()}>Print Table</button>
    </div>
  </div>
  );
}

export default LocalScores;
