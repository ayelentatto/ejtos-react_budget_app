import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const editBudget = (newBudget) => {
        if (newBudget > 20000) {
            alert("inadequate budget");

        }
        dispatch({
            payload: parseInt(newBudget),
            type: "SET_BUDGET"
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step="10"
                    max="20000"
                    style={{ marginLeft: '2rem', size: 10 }}
                    onChange={(event) => editBudget(event.target.value)}>
                </input>

            }</span>

        </div>
    );
};
export default Budget;
