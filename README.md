# Boosting Gift Aid Sales Efficiency at Oxfam: Maximizing Impact

## What we aim to achieve

Our goal is to enhance the efficiency of Gift Aid Sale at Oxfam, aiming for maximum impact. Gift Aid allows us to amplify the value of donations without any extra cost to donors, enabling Oxfam to reclaim 25% of the basic tax paid on their gifts. By partnering with Gift Aid providers, we’re streamlining the process by tagging donated items with barcode labels for better integration with our systems.

However, certanin Oxfam GB shops are facing challenges, such as lagging Gift Aid sales. To address this, we’re systematically identifying and rectifying issues, including till operator errors and anomalies in Gift Aid contributions. We’re also exploring technological solutions, like developing an application to improve data recording and analysis.

One contributing factor may be insufficient hardware in the till scanners receiving this data, leading operators to forgo manual input during peak times. To address this issue, we proposed developing an application using suitable hardware sources. In particular, augmenting the epos till, using old smartphones connected to the shops wifi. The application aims to:

- record gift aid sales per till operator
- identify potential anomalies
- encourage participation through gamification
- provide feedback to area managers, for further analysis

## Current practices and their limits

There is a six-sheet objectives chart that managers are to fill in, reminding them the basics of gift aid sign-up protocol, and reminding them to complete inductions with volunteers. This method could and will be improved.

The team's previous system was successfully implemented on a local level in a single shop, and was used to fulfill these objectives identifying candidates who perhaps needed a friendly reminder to scan the codes whilst on the till.

However after user feedback, and additional project requirements, it was decided to continue another iteration of the project as part of the agile development process, so that the system could be used across the divisions of shops and shop areas, primarily by implementing the ability for users to log in and out, as well as save data to a database, as opposed to relying on local storage.

## Innovations in Our Approach

This time round, the team focused upon using React and Node, for the creation of dynamic user interfaces in order to streamline the development process by providing reusable components, modular code structure, and efficient server-side rendering using React's virtual DOM that enables better performance, and scalability. Node.JS enables server side rendering of react applications which improves page load times and facilitates search engine optimization. It also has extensive community support and a variety of readily available resources in the form of libraries and tools with documentation to assist in enhancing the user experience.

## Impact and Stakeholders

Oxfam as a company can become deeply concerned at the prospect of haemorrhaging money in the form of unsold gift aid donations. Any data that can be acquired from this program will be used in order to analyse anomalies, as well as encourage friendly competition, not just amongst volunteers, but across shops. 25% on every pound made in tax, on top of a donation is a lot of money, and it all adds up.   

## Risks & Rewards

Some of the risks that we have to consider are security, data accuracy, and technophobia from not just volunteers, but managers, who have seen an increase in I.T. Security due to data breaches and phishing attacks. In one example, phisers were able to obtain the format of the shop codes and attach it to spoof emails, leaving shop computers open to SSH attacks and suchlike.  In order to combat that we propose three things:

- No vulnerabilities allowed in NPM packages
- Data format to not include area or shop codes
- Onboarding process to help users become familiar with navigation

## TimeLines and Deliverables

The team Gained two new members, and we had two weeks to complete the assignment, ensuring timely delivery before the introduction of the new EPOS system.
192 hours at roughly £25 per hour for 6 junior developers = £4,800

## What are the measures of success?

In the near future, an undisclosed EPOS company will be implementing a new till systems as part of an ongoing contract worth a considerable amount. A point of contact will hopefully be established between them after a successful trail run within one of the shop areas, of which we hope to demonstrate the utility of the program, and ask for consideration of features to be implemented. The measures of success will be:

1. A trail run by Area
2. Useful data extraction
3. Introduction to new EPOS till systems provider, to discuss features
4. Increase in Gift Aid Sales of any shops using the system

## Packages used:

# Package: Axios
Axios is a JavaScript library that simplifies making HTTP requests from your applications. Imagine your application needs to fetch data from a server or interact with an API (like fetching weather information or sending a form to a server). Axios helps with that process by providing an easy-to-use interface for sending and receiving data over the internet. It's like a messenger that delivers your requests to the server and brings back the responses, making it easier for your application to communicate with external services.

# Package: React-router-dom
React-router-dom is a package for managing navigation in React applications. It allows you to create different pages or views in your single-page React application. Think of it as a map that guides users through your application's different sections or pages. With React-router-dom, you can define routes for different URLs, and based on these routes, the appropriate components are rendered. This package helps in creating dynamic and interactive user interfaces in React applications. [2][5]

#Package: @mui/material, @emotion/react, @emotion/styled
These packages are used for styling React applications, particularly when using the Material-UI framework. @mui/material provides ready-made components and styles based on the Material Design guidelines. @emotion/react and @emotion/styled are packages that enable writing CSS styles within JavaScript files, offering a more convenient way to style React components. Together, they provide a powerful solution for creating visually appealing and responsive user interfaces in React applications. [3][6]
Package: @gsap/react

#@gsap/react is a package that integrates the GSAP 
(GreenSock Animation Platform) library with React applications. GSAP is a robust animation library used for creating smooth and sophisticated animations on the web. With @gsap/react, developers can easily incorporate GSAP animations into their React projects, adding visually engaging effects to their user interfaces. It simplifies the process of animating React components, making it accessible to developers of all skill levels.


#Package: @mui/material, @emotion/react, @emotion/styled
These packages are used for styling React applications, particularly when using the Material-UI framework. @mui/material provides ready-made components and styles based on the Material Design guidelines. @emotion/react and @emotion/styled are packages that enable writing CSS styles within JavaScript files, offering a more convenient way to style React components. Together, they provide a powerful solution for creating visually appealing and responsive user interfaces in React applications. [3][6]

#Package: @gsap/react
@gsap/react is a package that integrates the GSAP (GreenSock Animation Platform) library with React applications. GSAP is a robust animation library used for creating smooth and sophisticated animations on the web. With @gsap/react, developers can easily incorporate GSAP animations into their React projects, adding visually engaging effects to their user interfaces. It simplifies the process of animating React components, making it accessible to developers of all skill levels.

# Package: reactour
Reactour is a package used for creating guided tours within React applications. It allows developers to create interactive tours that guide users through the features or functionalities of their application. This is useful for onboarding new users or providing help within the application by highlighting important elements and explaining their purpose. Reactour simplifies the process of creating step-by-step tours, enhancing the user experience and usability of React applications.

# Package: express, body-parser, csv-parser, fs
These packages are commonly used in Node.js applications for building server-side applications or APIs. Express is a web application framework for Node.js that simplifies the process of building web servers. Body-parser is middleware for Express that helps parse incoming request bodies. Csv-parser is specifically designed for parsing CSV files, while fs is a core module in Node.js used for interacting with the file system. Together, these packages provide essential tools for building robust and scalable server-side applications in Node.js.

# Package: Firebase
Firebase is a comprehensive platform provided by Google for building mobile and web applications. It offers various services such as authentication, real-time database, cloud storage, hosting, and more. npm i Firebase would likely be an attempt to install Firebase-related packages for integrating Firebase services into a JavaScript application.

KnowledgeHut - Use Axios NPM to Generate HTTP Requests [Step-by-Step]
GeeksforGeeks - What is react-router-dom?
Material UI - Installation
npmjs.com - Axios
npmjs.com - react-router-dom
Stack Overflow - NPM error while running npm install @mui/material ...
