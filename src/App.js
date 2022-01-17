import axios from "axios";
import  { useEffect, useState} from "react"
import './App.css';

function App() {
  const apiKey= 'sQc1luCX';

  const [art, setArt] = useState([]);
  const [userInput,setUserInput] = useState("");
  const [searchTerm,setSearchTerm] = useState("");

  // make an api call for rijik museum
  useEffect( () => {
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: "GET",
      dataResponse: 'json',
      params: {
        key:apiKey,
        q: searchTerm,
        imgonly :true,
      }
    }).then( (response) => {
      console.log(response.data.artObjects);
      setArt(response.data.artObjects);
    })
  }, [searchTerm])

 const handleInput = (e)=> {
  setUserInput(e.target.value);
 }
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(userInput);
 }

  return (
    <div className="App">

      <form action="#" onSubmit={handleFormSubmit}>
        <label htmlFor="search" >Search</label>
        <input type="input" id="search" onChange={handleInput} value={userInput} />
        <button>Search</button>
      </form>

      {
        art.map( (artWork) => {
          return(
            <div key={artWork.id}>
              <h2>{artWork.longTitle}</h2>
              <img src={artWork.webImage.url} alt="" />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
// sQc1luCX


// Delete package-lock. json
// Add mini-css- to dependencies bit of the package.json
// "mini-css-extract-plugin": "2.4.7"
// 3. navigate to your react app folder and run
// npm install


// npm run build ---- for deploying website