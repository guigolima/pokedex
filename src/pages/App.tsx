import React, { useEffect } from "react";
import { getPokemonList } from "../api/requests";

const App = () => {
  useEffect(() => {
    getPokemonList().then((data) => {
      console.log(data);
    });
  }, []);

  return <div>App</div>;
};

export default App;
