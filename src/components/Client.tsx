import { Stack, TextField } from '@mui/material';
import './../App.css';
import * as React from 'react';
import { ClientProps, IClient } from '../ts/interfaces';
import { isAdmin, isUser, getClientInfo } from './../api'

const Client = (props: ClientProps) => {

  const [clientState, setClientState] = React.useState(props)
  const [clientData, setClientData] = React.useState<IClient>(
      {numeroRc: "",
      description: "",
      ifu: "",
      ice: ""}
    );

  const [admin, setAdmin] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<boolean>(false);
  
  React.useEffect(() => {
      setClientState(props);     
  }, [props])  
 
    React.useEffect(() => {
      (async () => {      
        const response = await isAdmin();
        setAdmin(response);
      })();  
    }, []);
  
    React.useEffect(() => {
      (async () => {
        const response = await isUser();
        setUser(response);
      })();  
    }, []);

    React.useEffect(() => {
      if(user){
        (async () => {      
          const response = await getClientInfo();
          setClientData(response);      
        })();  
      } else if(admin) {
        setClientData(clientState.clientData)
        console.log("propsx = ", props)
      }   
    }, [user, admin, clientState.clientData])

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