import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, display } from '@mui/system';
import styles from './card.module.css'


export default function CardView() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Network Stats"
      />
      <CardMedia
        component="img"
        height="194"
        image='https://www.shutterstock.com/shutterstock/photos/1981958651/display_1500/stock-vector-network-latency-meter-vector-color-icon-design-data-center-and-web-hosting-symbol-transfer-rate-1981958651.jpg'
        alt="Paella dish"
      />
      <CardContent>
        <Box className={styles.info}>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex'}}>
            Ping: 82ms
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Packets: 10KB
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
