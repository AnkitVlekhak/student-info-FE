import React from 'react'
import { useDispatch } from 'react-redux';
import { userAge } from '../../actions/ChatAction';

const Age = () => {
    const filledArray = Array(42 - 18).fill(0);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        var x = document.getElementById("age").options.selectedIndex;
        document.getElementById('inp_age').style.display = "none";
        dispatch(userAge(x + 18))
    }
    return (
        <div id='inp_age'>
            <label for="age">Age : </label>
            <select name="" id="age" onChange={handleSubmit}>
                {
                    filledArray.map((i, e) => {
                        return <option key={e} value={e + 18}>
                            {e + 18}
                        </option>
                    })
                }
            </select>
        </div>
    )
}

export default Age