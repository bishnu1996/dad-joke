import "./style.css";
const JokeButton = (props) => {
  return (
    <button id="jokeBtn" onClick={props.onClick}>
      Get another joke
    </button>
  );
};
export default JokeButton;
