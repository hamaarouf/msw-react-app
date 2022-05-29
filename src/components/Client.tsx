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
        <div>
            <input id="numro-rc" title="numeroRc" value={clientData.numeroRc}/>
            <input id="description" title="description" value={clientData.description}/>
            <input id="ifu" title="ifu" value={clientData.ifu} />
            <input id="ice" title="ice" value={clientData.ice} />
        </div>
    );
}

export default Client;