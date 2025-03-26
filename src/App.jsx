import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
	const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)
	return (
		<div>
			{
        puppies.map((puppy) => {
				  return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
			  })
      }
      {featPupId && (
        <div className="featuredPupSection">
          <h2 className="featuredPupName">{featuredPup.name}</h2>
          <ul className="list">
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
		</div>
	);
}

export default App;
