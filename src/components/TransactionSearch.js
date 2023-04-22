import React, {useState, useEffect} from "react";
function TransactionSearch ({transactions, setFilteredTransactions}) {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = e => {
        setSearchQuery(e.target.value);
    const filteredTransactions =transactions.filter(item => item.description);
    setFilteredTransactions(filteredTransactions);
    };

    return (
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
    );
}
export default TransactionSearch;