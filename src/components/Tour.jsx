import React from 'react';
import Tour from 'reactour';


const TourComponent = ({ steps, isOpen, onRequestClose }) => {
    return (
        <Tour
            steps={steps}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        />
    );
};

const TourSteps = [
    {
        selector: '.first-step',
        content: 'Welcome to the Oxfam Giftaid logger, this application helps us track gift aid sales in the store. Before we begin, let’s explore how to use the application.',
    },
    {
        selector: '.second-step',
        content: 'The application will prompt you to login using your Username, Pin Number and Area. This will need to be entered for each session.',
    },
    {
        selector: '.circle-wrapper',
        content: 'Once signed in, you’re all set to start logging sales! Everytime you make a sale with gift aid, tap the green button to log the transaction to the database..',
    },
    {
        selector: '.button.circle-wrapper',
        content: 'If the sale did not include gift aid, tap the red button to log it to the database.',
    },
    {
        selector: '.row.justify-content-center',
        content: 'Scroll down to check your total score. If you made a mistake, use the undo buttons to adjust your score.',
    },
    {
        selector: '.nav-link[href="/Leaderboard"]',
        content: 'Click on Leaderboard to view the leaderboard and see how you compare to your colleagues.',
        action: (node) => {
            if (node) {
                node.click();
            }
        }
    },
    {
        selector: '.nav-link[href="/StoreData"]',
        content: 'Click on Store Data to view a summary.',
        action: (node) => {
            if (node) {
                node.click();
            }
        }
    },
    {
        selector: '.sixth-step',
        content: 'That concludes the tour of the gift aid logger. If you have any questions, please ask your manager, deputy manager, or supervisor.',
    },
    // Add more steps as needed
];

export { TourComponent, TourSteps };