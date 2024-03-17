
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
// import usersDataJson from './assets/UsersData.json';

const firebaseConfig = {
  apiKey: "AIzaSyCFPnbo7r2xIKUqW0I-2vqQS8Cz9G9M_tA",
  authDomain: "oxfamlogger.firebaseapp.com",
  databaseURL:
    "https://oxfamlogger-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oxfamlogger",
  storageBucket: "oxfamlogger.appspot.com",
  messagingSenderId: "142768490360",
  appId: "1:142768490360:web:24e86a272d49e2ded82a8d",
  measurementId: "G-KY1EJ33Z6G",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



export function writeUserData(userId, name, gAid, noGAid, date) {
  const db = getDatabase();
//   userId = "John3456";
//   password = "fgr";
//   name = "John";
//   gAid = "1";
//   noGAid = "1";
//   date = "2024-02-24";

  set(ref(db, "users/" + userId + "/" + date), {
    username: userId,
    // password: password,
    name: name,
    gAid: gAid,
    noGAid: noGAid,
    date: date,
  });
  return userId;
}

export function writeMultipleUsersData(userId, password, name, gAid, noGAid, date) {
  const db = getDatabase();

  // Iterate over the array of objects
  for (let i = 0; i < usersDataJson.length; i++) {
    const userData = usersDataJson[i];

    // Set the values from the current object in the array
    userId = userData.userId;
    password = userData.password;
    name = userData.name;
    gAid = userData.gAid;
    noGAid = userData.noGAid;
    date = userData.date;

    // Set the data in the database
    set(ref(db, "users/" + userId + "/" + date), {
      username: userId,
      password: password,
      name: name,
      gAid: gAid,
      noGAid: noGAid,
      date: date,
    });

    // Save password under a different path
    set(ref(db, "users/" + userId + "/pass"), {
      password: password,
    });
  }

  return userId; // Return the last userId processed
}
