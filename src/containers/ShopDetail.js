import React from 'react';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import ShopLogo from "../components/ShopLogo";
import {shopDetailTheme} from '../styles/themes'

const ShopDetail = (route) => {
  const classes = shopDetailTheme();

  return (
    <div className={classes.root}>
      <ListSubheader style={{width: '100%', height: 30}} component="div">Search Shops > {/*shop.name*/}</ListSubheader>
        <div className="animated zoomInUp">
          <div className={classes.content}>
            <ShopLogo
              src=""
              show={true}
              placeholder="/no-logo.png"/>
            <Typography className={classes.header} variant="h5" component="h3">
              {/*shop.name*/}
            </Typography>
        </div>
      </div>
    </div>
  )
}

export default ShopDetail
