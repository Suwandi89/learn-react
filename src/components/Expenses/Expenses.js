import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (data) => {
    const [selectYear, setSelectYear] = useState('2020');

    const selectFilterDataHandler = (selectedFilterData) => {
        const filterData = selectedFilterData;
        setSelectYear(filterData);
        console.log(filterData);
    };

    const filteredExpenses = data.props.filter(expense => {
        return expense.date.getFullYear().toString() === selectYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectYear} onSelectFilterData={selectFilterDataHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;