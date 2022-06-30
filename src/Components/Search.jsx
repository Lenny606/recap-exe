import { useState } from "react";

function Search() {

    const [qeury, setQuery] = useState('');
    const [search, setSearch] = useState([]);
    const [image, setImage] = useState('')

    const url = `https://restcountries.com/v2/name/${qeury}`

    const loadData= async() => {

        const response = await fetch(url);
        const data = await response.json();

        //read the data and access them accordingly if one object or array etc...
        
        setSearch(data[0]);
        setImage(data[0].flags);

       

    }
   
    console.log(search);

    return (
        <> 
        <div className="search">
            <br />
       <input className="search" type="text" onKeyDown={(e) => e.keyCode == '13' && loadData()} onChange={(e)=>{setQuery(e.target.value)}}/>
       {/* <button onClick={loadData()}>Search</button> */}
       <p className="search">{search.name}</p>
       <img src={image.svg}/>
       </div>
        </>
    )
}

export default Search;