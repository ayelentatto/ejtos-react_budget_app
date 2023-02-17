import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const SelectCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const { name, setName } = useState('Pound');
    const changeCurrency = (nameCurrency, valueCurrency) => {
        dispatch({
            payload: valueCurrency,
            type: "CHG_CURRENCY"
        })
        setName(nameCurrency)
    }
    return (
        <div className='alert alert-secondary'>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({currency} {name})
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" name='Dollar' value='$' onClick={(e)=>changeCurrency(e.target.name , e.target.value)} > $ Dollar</button></li>
                    <li><button class="dropdown-item" name="Pound" value='£' onClick={(e)=>changeCurrency(e.target.name , e.target.value)}>£ Pound</button></li>
                    <li><button class="dropdown-item" name="Euro" value='€' onClick={(e)=>changeCurrency(e.target.name , e.target.value)}>€ Euro</button></li>
                    <li><button class="dropdown-item" name="Rupee" value='₹' onClick={(e)=>changeCurrency(e.target.name , e.target.value)}>₹ Ruppee</button></li>
                </ul>
            </div>
            {/* <select value={currency} onChange={e => (e.target.value)}
                style={{ marginLeft: '60rem', backgroundColor: 'greenyellow', marginTop: '1.5rem' }}>
                <option id="dollar" name='dollar'>$ Dollar</option>
                <option id="puond" name="puond"  >£ Pound</option>
                <option id="euro" name="euro">€ Euro</option>
                <option id="rupee" name="rupee" >₹ Ruppee</option>
    </select> */}
        </div>
    )
}


export default SelectCurrency;