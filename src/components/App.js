import React, {useState} from "react";
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import TransactionSearch from './TransactionSearch';

function App() {
  const [filteredTransactions, setFilteredTransactions] =useState([]);
  return(
    <div>
      <TransactionSearch  setFilteredTransactions={setFilteredTransactions} />
      <TransactionForm />
      <TransactionTable />    
    </div>
  )
}

export default App;
