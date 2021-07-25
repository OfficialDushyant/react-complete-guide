import './Expenses.css'
import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div className="expenses">
            {
                expenses.map((item) => { 
                    return (
                        <ExpenseItem
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    /> 
                    )
                })
            }
        
      {/* <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}

        </div>
    )
}

export default Expenses