import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Banner } from './Banner';
import './home.css';
import { Card } from './Card';
import { listListing } from '../../actions/ListingActions';

export const Home = () => {
  const dispatch = useDispatch();

  // Use a memoized selector to avoid unnecessary re-renders
  const listingList = useSelector((state) => state.listinglist || { loading: false, error: null, listings: [] });

  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  console.log('listings:', listings);

  return (
    <div className="banner_class">
      <Banner />
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
             
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};
