import React from 'react';
import MOCK_DATA from '../MOCK_DATA';
import '../styles/ListItem.scss';
import '../index.css';

const ListItem = () => {
  return (
    <div>
        {
          MOCK_DATA.storeData.map((storeData, i) => {
            return (
              <div key={i}>
                <div className="itemContainer">
                  <div className="imageHolder"></div>
                  <span>{storeData.company_name}</span>
                  <span className="heartIcon"></span>
                  <span className="minimumOrder">$100 Minimum Order</span>
                </div>
              </div>
            );
          })
        }
    </div>
  )
}

export default ListItem;
