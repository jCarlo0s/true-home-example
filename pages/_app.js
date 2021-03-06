import '../styles/globals.scss';
import axios from "axios";
import {
  SET_CITIES
} from "../redux/types";
import { wrapper } from "../redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
  return <div><ToastContainer /><Component {...pageProps} /></div>
}

// fetching the destination list from the api
MyApp.getInitialProps = wrapper.getInitialAppProps(store => async context => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_HOST}/api/cities`)
    store.dispatch({type: SET_CITIES, payload: response.data});
  } catch (error) {
    console.log(error);
  }
});

export default wrapper.withRedux(MyApp);
