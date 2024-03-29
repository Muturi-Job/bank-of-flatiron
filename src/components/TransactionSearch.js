import React, {useState, useEffect} from "react";


function TransactionSearch ({transactions, setFilteredTransactions}) {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = e => {
        const value = e.target.value;
        setSearchQuery(value);
    
        const filtered = transactions.filter(transaction => {
          transaction.description.includes(value)}
        );
        setFilteredTransactions(filtered);
      };

    return (
        <input class= "searchBar" type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
    );
}
export default TransactionSearch;