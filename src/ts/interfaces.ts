export interface IClient {
    numeroRc: string,
    description: string,
    ifu: string,
    ice: string
  }

  export interface ClientProps {
    clientData: IClient
}