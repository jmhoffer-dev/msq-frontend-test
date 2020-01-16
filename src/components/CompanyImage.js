import React, { Component } from 'react';
import MOCK_DATA from '../MOCK_DATA';


class CompanyImage extends Component {
	render() {
		return (
            <div>
                {
                MOCK_DATA.storeData.map((storeData, i) => {
                    return (
                    <div key={i}>
                    <div className="imageContainer">
                    <a href={storeData.url}>
						<img src={storeData.url} alt="example" />
					</a>
                        
                    </div>
                    </div>
                    );
                })
                }
            </div>
        );
    }
} 
export default CompanyImage;
