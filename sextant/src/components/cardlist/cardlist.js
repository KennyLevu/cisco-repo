import CardView from '../card/card';
import {Box} from '@mui/system';
import styles from './cardlist.module.css';

/**
 *
 * @return {ReactDOM}
 */
export default function CardList() {
  return (
    <Box className={styles.list}>
      <CardView ipv4={true}/>
      <CardView ipv4={false}/>
    </Box>
  );
}

