import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
    const [listings, setListings] = useState([])
    const [onSearch, setOnSearch] = useState('')

    useEffect(() => {
      fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(listings => {
        console.log(listings)
        setListings(listings)
      })
    }, [])

    function handleDeleteListing(deletedListingId){
      const updatedListings = listings.filter(listing => {
        return listing.id !== deletedListingId
      })
      setListings(updatedListings)
    }  

    const searchResults = listings.filter((listing) =>
      listing.description.toLowerCase().includes(onSearch.toLowerCase())
    )

  return (
    <div className="app">
      <Header onSearch={onSearch} setOnSearch={setOnSearch} />
      <ListingsContainer listings={searchResults} handleDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
