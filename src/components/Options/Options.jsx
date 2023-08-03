import React from 'react'
import './Options.css'
import { useDispatch } from 'react-redux'
import { userClick } from '../../actions/ChatAction';
function h() {
    document.getElementById('l').style.display = "block";
}
const Options = (props) => {
    const dispatch = useDispatch();
    function handleClick() {
        document.getElementById('gotit').style.display = "none";
        dispatch(userClick());
    }
    return (
        <div id='l' style={{ display: "none" }}>
            <button onClick={handleClick} id='gotit' style={{ display: "block" }} >Got it!</button>
        </div>
    )
}

export default Options;
export { h };