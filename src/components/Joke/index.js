import "./style.css";
import { getData } from "../Api";
import { useEffect, useState } from "react";
import JokeData from "../JokeData";
import JokeButton from "../JokeButton";

const Joke = () => {
  const [data, setData] = useState("");

  const getGenerateJoke = async () => {
    const data = await getData();
    setData(data);
  };

  useEffect(() => {
    getGenerateJoke();
  }, []);

  const getNewJoke = () => {
    getGenerateJoke();
  };

  return (
    <div class="container">
      <h3>Don't lough challenege</h3>
      <JokeData data={data} />
      <JokeButton onClick={getNewJoke} />
    </div>
  );
};

export default Joke;
