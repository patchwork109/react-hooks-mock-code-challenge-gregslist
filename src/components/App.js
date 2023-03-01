import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(setListings)
  }, [])


  const removeListing = theIdOfWhatGetsRemoved => {

    const filteredArray = listings.filter(listing => {
      return listing.id !== theIdOfWhatGetsRemoved
    })

    setListings(filteredArray)
  }


  const [searchString, setSearchString] = useState("")

  const searchedValueUpdate = aNewStringFromTheSearchBar => {
    setSearchString(aNewStringFromTheSearchBar);
    }

  const searchedListings = listings.filter(listing => {
    if (listing.description.toLowerCase().includes(searchString.toLowerCase())) {
      return true
    }
  })

  return (
    <div className="app">
      <Header searchedValueUpdate={searchedValueUpdate}/>
      <ListingsContainer 
        listings={searchedListings} 
        removeListing={removeListing}
      />
    </div>
  );
}

export default App;
