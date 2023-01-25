import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpenseList.css';

const ExpenseList = (data) => {
    return (
        <Card className='expenses'>
            <ExpenseItem title={data.props[0].title} amount={data.props[0].amount} date={data.props[0].date}/>
            <ExpenseItem title={data.props[1].title} amount={data.props[1].amount} date={data.props[1].date}/>
            <ExpenseItem title={data.props[2].title} amount={data.props[2].amount} date={data.props[2].date}/>
            <ExpenseItem title={data.props[3].title} amount={data.props[3].amount} date={data.props[3].date}/>
        </Card>
    )
}

export default ExpenseList;