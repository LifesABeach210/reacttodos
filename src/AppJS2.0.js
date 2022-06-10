import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App"
    >
<header className="App-logo">
    <img src={logo} className="App-logo" alt="logo">
    <MyInfoComponent/>
</header>
</div>
);
}

const MyInfoComponent = () => {
  const [myName, setMyName] = useState("Ginny");
  const [myFavoriteColor, setMyFavoriteColor] = useState("red");
  const [favoriteMovies, setFavoriteMovies] = useState([
    "Avengers 1",
    "Aveng 3",
    "Avengers 4",
  ]);
  return (
    <div><h4>Name:</h4>
    <p>{myName}</p>
    <input
    type="text"
    value={myName}
    onChange={(e){
      console.logo(e.target.value)
      setMyName(e.target.value);
    }}></imput><h4>Favorite Color:</h4>
    < p style={{backgroundColor:myFavoriteColor}}>{myFavoriteColor}</p>
    <input
    type="text"
    onChange={(e) =>{
      setMyFavoriteColor(e.target.value);
    }}></imput>
    <h4>favoriteMovies</h4>
    <ul>
    {favoriteMovies.map((element, index)=> {
      return <li key={`favorite-movie-${index}`}>{element}</li>}
    )}
    </ul>
    <ul>{favoriteMovies.map(()=>{
      return(
        <li key={`favorite-movie-input-${index}`}>
        <label>Movie {index+1}:</label><imput type="text"value={favoriteMovies[index]}onChange={(e)=>{
          console.log(e.target.value)
          const updatedMovies= [favoriteMovies[0], favoriteMovies[1],favoriteMovies[2]]
          updatedMovies[index]=e.target.value
          setFavoriteMovies(updatedMovies)
        }}>
        </input>
        </li>
      );
    })}
    </ul>

    </div>

  )
}
export default App;
