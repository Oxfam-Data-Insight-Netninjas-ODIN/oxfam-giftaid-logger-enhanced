
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get, remove } from "firebase/database";
// import usersDataJson from './assets/UsersData.json';

export const firebaseConfig = {
  apiKey: "AIzaSyD7ZE16YXh3C_qntK8rDOJXIeFznpGAKJ4",
  authDomain: "oxfamodin-28c56.firebaseapp.com",
  databaseURL: "https://oxfamodin-28c56-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oxfamodin-28c56",
  storageBucket: "oxfamodin-28c56.appspot.com",
  messagingSenderId: "329879663648",
  appId: "1:329879663648:web:42c4d8e9732288d4ddb845",
  measurementId: "G-RRNK40D82H"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getDatabase();


// function to add a user data to current date to databse
export function writeUserData(userId, username, GiftAid, noGiftAid, date) {
  set(ref(db, "users/" + userId + "/" + date), {
    username : userId,
    name: username,
    gAid: GiftAid,
    noGAid: noGiftAid,
    date: date
  });
  // set(ref(db, "users/" + name + sufix + "/pass"), {
  //   password: password
  // });
  // set(ref(db, "users/" + name + sufix + "/sufix"), {
  //   sufix: sufix
  // });
}


// function to add a NEW user to databse
export function writeNewUserData(sufix, name, password) {
  set(ref(db, "users/" + name + sufix + "/pass"), {
    password: password
  });
  set(ref(db, "users/" + name + sufix + "/sufix"), {
    sufix: sufix
  });
}
// function to add a NEW user to databse
// export function writeNewUserData(sufix, name) {
//   set(ref(db, "users/" + name + sufix + "/sufix"), {
//     sufix: sufix
//   });
// }


// function to delete a user
export function deleteUser(user) {
  remove(ref(db, `users/${addUserId}`));
}


// function for writing multiple users
export function writeMultipleUsersData(username, password, name, gAid, noGAid, date) {
  const db = getDatabase();

  // Iterate over the array of objects
  for (let i = 0; i < usersDataJson.length; i++) {
    const userData = usersDataJson[i];
    console.log(usersDataJson[i]);
    console.log(username, password, name, gAid, noGAid, date)
    // Set the values from the current object in the array
    username = userData.username;
    name = userData.name;
    gAid = userData.gAid;
    noGAid = userData.noGAid;
    date = userData.date;

    // Set the data in the database
    set(ref(db, "users/" + username + "/" + "2024-03-17"), { 
      username: username, 
      name: name, 
      gAid: gAid, 
      noGAid: noGAid, 
      date: date 
    });
    console.log(password);
    // Save password under a different path
    set(ref(db, "users/" + username + "/pass"), {
      
      password: userData.password
     });
  }
  

  // return username; // Return the last username processed
}