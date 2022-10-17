import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeleteListing}) {

  function displayListings(){

    return listings.map(listing => {
      // console.log(listing)

      return <ListingCard description={listing.description} image={listing.image} location={listing.location} key={listing.id}  id={listing.id} onDeleteListing={handleDeleteListing} />
    })
  }

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayListings()}

      </ul>
    </main>
  );
}

export default ListingsContainer;
