import Typography from '@mui/material/Typography';
import * as React from 'react';


/**
 *
 * @param {*} url fetch url
 * @return {ReactDOM}
 */
export default function FetchDisplay({url}) {
  const [ip, setIp] = React.useState('');
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
      });
  });

  return (
    <Typography variant="body2" color="text.secondary"
      sx={{display: 'flex'}}>
      {ip}
    </Typography>
  );
}
