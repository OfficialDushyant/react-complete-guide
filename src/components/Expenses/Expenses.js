import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem"

import './Expenses.css'

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <Card className="expenses">
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
        </Card>
    )
}

export default Expenses