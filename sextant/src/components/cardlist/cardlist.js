import CardView from '../card/card';
import {Box} from '@mui/system';
import styles from './cardlist.module.css';
import FetchDisplay from '../fetchdisplay/fetchdisplay';
import PylonDisplay from '../pylon/pylon';
/**
 *
 * @return {ReactDOM}
 */
export default function CardList() {
  return (
    <Box className={styles.list}>
      <CardView name={'ipv4'}>
        <FetchDisplay url='https://api.ipify.org?format=json' />
      </CardView>
      <CardView name={'ipv6'}>
        <FetchDisplay url='https://api64.ipify.org?format=json'/>
      </CardView>
      <CardView name={'Pylon'}>
        <PylonDisplay/>
      </CardView>
    </Box>
  );
}

