# Boosting Gift Aid Sales Efficiency at Oxfam: Maximizing Impact

## What we aim to achieve

Our goal is to enhance the efficiency of Gift Aid Sales at Oxfam, aiming for maximum impact. Gift Aid allows us to amplify the value of donations without any extra cost to donors, enabling Oxfam to reclaim 25% of the basic tax paid on their gifts. By partnering with Gift Aid providers, we’re streamlining the process by tagging donated items with barcode labels for better integration with our systems.

However, certain Oxfam GB shops are facing challenges, such as lagging Gift Aid sales. To address this, we’re systematically identifying and rectifying issues, including till operator errors and anomalies in Gift Aid contributions. We’re also exploring technological solutions, like developing an application to improve data recording and analysis.

One contributing factor may be insufficient hardware in the till scanners receiving this data, leading operators to forgo manual input during peak times. To address this issue, we proposed developing an application using suitable hardware sources. In particular, augmenting the epos till, using old smartphones connected to the shops' wifi. The application aims to:

- record gift aid sales per till operator
- identify potential anomalies
- encourage participation through gamification
- provide feedback to area managers, for further analysis

## Current practices and their limits

There is a six-sheet objectives chart that managers are to fill in, during review, to remind them of the basics of gift aid sign-up protocol, and reminding them to complete inductions with volunteers. This method could and will be improved.

The team's previous system was tested in a single shop and was used to identify candidates who perhaps needed a friendly reminder to scan the codes whilst on the till.

However, after user feedback, and additional project requirements, it was decided to continue another iteration of the project as part of the agile development process, so that the system could be used across the divisions of shops and shop areas, primarily by implementing the ability for users to log in and out, as well as save data to a database, as opposed to relying on local storage.

## Innovations in Our Approach

This time round, the team focused on using React and Node, for the creation of dynamic user interfaces in order to streamline the development process by providing reusable components, modular code structure, and efficient server-side rendering using React's virtual DOM that enables better performance, and scalability. Node.JS enables server-side rendering of react applications which improves page load times and facilitates search engine optimization. It also has extensive community support and a variety of readily available resources in the form of libraries and tools with documentation to assist in enhancing the user experience.

## Impact and Stakeholders

Oxfam as a company can become deeply concerned at the prospect of hemorrhaging money in the form of unsold gift aid donations. Any data that can be acquired from this program will be used in order to analyze anomalies, as well as encourage friendly competition, not just amongst volunteers, but across shops. 25% on every pound made in tax, on top of a donation, can contribute significantly to the charity's turnover.

## Risks

Some of the risks that we have to consider are security, data accuracy, and technophobia from not just volunteers, but managers, who have seen an increase in I.T. Security due to data breaches and phishing attacks. In one example, phishers were able to obtain the format of the shop codes and attach them to spoof emails, leaving shop computers open to SSH attacks and such.  To combat that we propose three things:

- No vulnerabilities allowed in NPM packages
- Client-side data format to not include area or shop codes
- Onboarding process to help users become familiar with navigation
- No financial data or Potential GDPR breaches are possible

## TimeLines
The team gained two new members, and we had two weeks to complete the assignment, ensuring timely delivery before the introduction of the new EPOS system.
We estimate that 192 hours at roughly £25 per hour for 6 junior developers would theoretically cost around £4,800.

## What are the measures of success?

In the near future, an undisclosed EPOS company will implement a new till system as part of an ongoing contract worth a considerable amount. We hope to reach out to them after a successful trial run within one of the shop areas, of which we hope to show the program's utility and ask for consideration of features to be implemented. The measures of success will be:

1. A trail run by Area
2. Useful data extraction
3. Introduction to new EPOS till systems provider, to discuss features
4. Increase in Gift Aid Sales of any shops using the system

There are approximately 600 shops in the UK, and say on average they have 25 shops per area code, which would mean 24 areas. Say the bottom 3 shops of each of these areas (72 shops) participated in using the program, over a period of 7 months (estimated time frame until new epos is implemented), a measure of success would be looking to see if the gift aid sales over this period of time were greater than the cost it would cost to implement it.

## Packages used:

# Package: Axios
Axios is a JavaScript library that simplifies making HTTP requests from your applications. Imagine your application needs to fetch data from a server or interact with an API (like fetching weather information or sending a form to a server). Axios helps with that process by providing an easy-to-use interface for sending and receiving data over the Internet. It's like a messenger that delivers your requests to the server and brings back the responses, making it easier for your application to communicate with external services.

# Package: React-router-dom
React-router-dom is a package for managing navigation in React applications. It allows you to create different pages or views in your single-page React application. Think of it as a map that guides users through your application's different sections or pages. With React-router-dom, you can define routes for different URLs, and based on these routes, the appropriate components are rendered. This package helps in creating dynamic and interactive user interfaces in React applications. [2][5]

# Package: @mui/material, @emotion/react, @emotion/styled
These packages are used for styling React applications, particularly when using the Material-UI framework. @mui/material provides ready-made components and styles based on the Material Design guidelines. @emotion/react and @emotion/styled are packages that enable writing CSS styles within JavaScript files, offering a more convenient way to style React components. Together, they provide a powerful solution for creating visually appealing and responsive user interfaces in React applications. [3][6]
Package: @gsap/react

# @gsap/react is a package that integrates the GSAP 
(GreenSock Animation Platform) library with React applications. GSAP is a robust animation library used for creating smooth and sophisticated animations on the web. With @gsap/react, developers can easily incorporate GSAP animations into their React projects, adding visually engaging effects to their user interfaces. It simplifies the process of animating React components, making it accessible to developers of all skill levels.


# Package: @mui/material, @emotion/react, @emotion/styled
These packages are used for styling React applications, particularly when using the Material-UI framework. @mui/material provides ready-made components and styles based on the Material Design guidelines. @emotion/react and @emotion/styled are packages that enable writing CSS styles within JavaScript files, offering a more convenient way to style React components. Together, they provide a powerful solution for creating visually appealing and responsive user interfaces in React applications. [3][6]

# Package: @gsap/react
@gsap/react is a package that integrates the GSAP (GreenSock Animation Platform) library with React applications. GSAP is a robust animation library used for creating smooth and sophisticated animations on the web. With @gsap/react, developers can easily incorporate GSAP animations into their React projects, adding visually engaging effects to their user interfaces. It simplifies the process of animating React components, making it accessible to developers of all skill levels.

# Package: reactour
Reactour is a package used for creating guided tours within React applications. It allows developers to create interactive tours that guide users through the features or functionalities of their application. This is useful for onboarding new users or providing help within the application by highlighting important elements and explaining their purpose. Reactour simplifies the process of creating step-by-step tours, enhancing the user experience and usability of React applications.

# Package: express, body-parser, csv-parser, fs
These packages are commonly used in Node.js applications for building server-side applications or APIs. Express is a web application framework for Node.js that simplifies the process of building web servers. Body-parser is middleware for Express that helps parse incoming request bodies. Csv-parser is specifically designed for parsing CSV files, while fs is a core module in Node.js used for interacting with the file system. Together, these packages provide essential tools for building robust and scalable server-side applications in Node.js.

# Package: Firebase
Firebase is a comprehensive platform provided by Google for building mobile and web applications. It offers various services such as authentication, real-time databases, cloud storage, hosting, and more. npm i Firebase would likely be an attempt to install Firebase-related packages for integrating Firebase services into a JavaScript application.

KnowledgeHut - Use Axios NPM to Generate HTTP Requests [Step-by-Step]
GeeksforGeeks - What is react-router-dom?
Material UI - Installation
npmjs.com - Axios
npmjs.com - react-router-dom
Stack Overflow - NPM error while running npm install @mui/material ...

# To log in as a test user, please use the username Test1234 (case sensitive) and the password 1234

the link to the deployed application is: https://oxfam-logger-enhanced.netlify.app/

![Screenshot 2024-03-24 153326](https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger-enhanced/assets/64762171/80afb9f9-b6b4-4376-ab76-bc2d77f6c2b0)
![Screenshot 2024-03-24 153358](https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger-enhanced/assets/64762171/a7bffeb9-cf77-449c-bccf-c34eac7e3730)
![Screenshot 2024-03-24 153414](https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger-enhanced/assets/64762171/cf86c0db-5509-457b-97ce-f73fe417199f)
![Screenshot 2024-03-24 153424](https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger-enhanced/assets/64762171/3c16e484-d1b2-4fce-9c34-fe4742fa7b59)
![Screenshot 2024-03-24 153433](https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger-enhanced/assets/64762171/753adabd-661c-4297-acd6-9165bf1c7858)
![Screenshot 2024-03-24 153441](https://github.com/Oxfam-Data-Insight-Netninjas-ODIN/oxfam-giftaid-logger-enhanced/assets/64762171/acc96f97-75de-4c16-b4f7-abe362e3d0f1)


