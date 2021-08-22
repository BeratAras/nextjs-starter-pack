
import {useEffect, useState} from "react";
import Head from "next/head";
import '/axios.config'
import {Provider, useSelector} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from '../store'
import {transitions,positions, Provider as AlertProvider} from "react-alert";
import {Alert} from "@material-ui/lab";
import axios from "axios";

const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '20px',
    transition: transitions.SCALE
}

const AlertTemplate = ({message, close, options}) => (
    <div onClick={close}>
        <Alert severity={options.type === 'success' ? 'success' : 'error'}>{message}</Alert>
        <br/>
    </div>

)

function MyApp({ Component, pageProps }) {
    const [settings, setSettings] = useState([])
    function fetchSettings() {
        axios.get('settings').then((res) => {
            setSettings(res.data)
        })
    }
    useEffect(() => {
        fetchSettings()
    }, [])
   return (
        <Provider store={store}>
            <Head>
                <title>NextJs Starter Pack</title>
            </Head>
          <PersistGate persistor={persistor}>
              <AlertProvider template={AlertTemplate} {...alertOptions}>
                  <Component {...pageProps} />
              </AlertProvider>
          </PersistGate>
        </Provider>
  )
}


export default MyApp
