import { Stack, TextField } from '@mui/material';
import './../App.css';
import * as React from 'react';
import { IClient } from '../ts/interfaces';
import {  getClientInfo } from './../api'

const Client = () => {

  const [clientData, setClientData] = React.useState<IClient>(
      {numeroRc: "",
      description: "",
      ifu: "",
      ice: ""}
    );


    React.useEffect(() => {
        (async () => {      
          const response = await getClientInfo();
          setClientData(response);      
        })();  
    }, [])

    return(
        <Stack direction="row" spacing={3} className='client' >
            <TextField id="numro-rc" label="Numero RC" variant="outlined" value={clientData.numeroRc}/>
            <TextField id="description" label="description" variant="outlined" value={clientData.description}/>
            <TextField id="ifu" label="IFU" variant="outlined" value={clientData.ifu} />
            <TextField id="ice" label="ICE" variant="outlined" value={clientData.ice} />
        </Stack>
    );
}

export default Client;