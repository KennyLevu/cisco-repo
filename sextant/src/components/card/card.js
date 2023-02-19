import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/system';
import styles from './card.module.css';

/**
 *
 * @param {boolean} ipv4
 * @return {ReactDOM}
 **/
export default function CardView({ipv4}) {
  const url = ipv4 ? 'https://api.ipify.org?format=json' : 'https://api64.ipify.org?format=json';
  console.log(url);
  const iptype = ipv4 ? 'ipv4' : 'ipv6';
  const [ip, setIp] = React.useState('');
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.ip);
      setIp(data.ip);
    });


  return (
    <Card sx={{maxWidth: 345, minWidth: 300}}>
      <CardHeader
        title="Network Stats"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image='https://www.shutterstock.com/shutterstock/photos/1981958651/display_1500/stock-vector-network-latency-meter-vector-color-icon-design-data-center-and-web-hosting-symbol-transfer-rate-1981958651.jpg'
        alt="Paella dish"
      /> */}
      <CardContent>
        <Box className={styles.info}>
          <Typography variant="body2" color="text.secondary"
            sx={{display: 'flex'}}>
            {iptype + ': ' + ip}
          </Typography>
        </Box>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
