
# Expense Tracker

An expense tracker application built with React that allows users to manage and track their income and expenses.

## Features
-Add Transactions: Enter and categorize transactions as income or expense.
-View Transaction History: Display a list of all transactions.
-Pie Chart Visualization: Visualize the distribution of transactions with a pie chart.
-Local Storage Integration: Persist transaction data across browser sessions.
-Dynamic Updates: Automatically update the pie chart and transaction list when new transactions are added.

## Technologies Used

- React
- React Hooks
- Context API
- JavaScript (ES6+)
- HTML5
- CSS3
- Node.js
- npm
- Chart.js
- react-chartjs-2
- react-modal
- Local Storage

## Installation
1. *Clone the Repository:*
            git clone <repository-url>


2. *Navigate to the Project Directory:*  
            cd expanse-tracker


3. *Install Dependencies:*
            npm install


4. *Install Pie Chart Dependencies:*
            npm install chart.js@latest react-chartjs-2@latest


5. *Start the Development Server:*
            npm start

6. The application will be available at http://localhost:3000.

## Components

### 1. HomeComponent
- Displays the balance, income, and expenses.
- Toggles the visibility of the AddTransaction component.
- Passes the addTransaction function to the AddTransaction component.

### 2. AddTransaction
- Collects user input for the transaction amount, description, and type (income/expense).
- Validates the input and alerts the user if any field is missing or invalid.
- Adds the transaction to the list when the "Add Transaction" button is clicked.

### 3. TransactionContext
- Provides the context for managing transactions globally.
- Contains functions to add and delete transactions.
- Stores the state of transactions, income, and expenses.

### 4. History
- Displays the list of transactions.
- Allows users to search for transactions by category.
- Provides a delete button to remove transactions.

## Code Structure

src/
|-- components/
|   |-- HomeComponent.js
|   |-- AddTransaction.js
|   |-- History.js
|   |-- PieChart.js
|
|-- context/
|   |-- Process.js
|   |-- TransactionContext.js
|
|-- App.js
|-- index.js

## CSS for the application

The CSS styles the layout of the application, including the container, balance display, buttons, and transaction lists. Key styles include:
=======
# expanse-tracker
>>>>>>> 23d4137f280c473b86d927f7f757a654d4490aa1
