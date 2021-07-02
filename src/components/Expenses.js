import ExpenseItem from "./ExpenseItem";
import './Expense.css';

function Expenses(props) {
  const expense_arr = props.items;

  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;