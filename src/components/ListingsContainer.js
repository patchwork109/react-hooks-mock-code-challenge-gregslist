import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {

  
  const renderListings = listings.map(listing => {
    return <ListingCard key={listing.id}
        id={listing.id}
        description={listing.description}
        location={listing.location}
        image={listing.image}
        removeListing={removeListing}
    />
  })

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
