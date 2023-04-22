import React, {useState, useEffect} from "react";

function TransactionForm () {
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0,
    });

    const handleInput = e => {
        const { name, value} =e.target;
        setFormData({...formData, [name]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:8001/transactions', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Date: </label>
            <input type="date" id="date" value={formData.date} onChange={handleInput} />
            <label>Description: </label>
            <input type="text" id="description" value={formData.description} onChange={handleInput} />
            <label>Category:</label>
            <input type='text' id="category" value={formData.category} onChange={handleInput} />
            <label>Amount:</label>
            <input type="number" id="amount" value={formData.amount} onChange={handleInput} />
            <button type="submit">Add Transaction</button>
        </form>
    );
}
export default TransactionForm;