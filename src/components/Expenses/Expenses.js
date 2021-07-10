import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";

const Expenses = (props) => {
  const expense_arr = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={expense_arr[0].title}
          amount={expense_arr[0].amount}
          date={expense_arr[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense_arr[1].title}
          amount={expense_arr[1].amount}
          date={expense_arr[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense_arr[2].title}
          amount={expense_arr[2].amount}
          date={expense_arr[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expense_arr[3].title}
          amount={expense_arr[3].amount}
          date={expense_arr[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
