import React from 'react';
import ShopOverview from '../components/ShopOverview'
import Gallery from './Gallery'

const SearchShops = ({ history }) => {
  const shops = { nodes: [] }

  return (
    <div>
      <div>
        <Gallery>
          {shops.nodes.map((shop, index) => (
            <ShopOverview key={shop._id} {...shop} />
          ))}
        </Gallery>
      </div>
    </div>
  )
}

export default SearchShops
