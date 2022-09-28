import './style.css';

const JokeData = (props)=>{
    return(
        <div class="joke" id="joke">{props.data}</div>
    );
}
export default JokeData;