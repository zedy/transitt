export type GenericApiObject = {
  [key: string]: string | number | boolean;
};

export type ConnectionDestinaton = {
  departure: string;
  arrival: string;
  station: string;
  platform: string;
  delay: number;
  canceled: boolean;
  location: GenericApiObject;
  arrivalTimestamp: string;
  departureTimestamp: string;
};

export type ConnectionSection = {
  arrival: GenericApiObject;
  departure: GenericApiObject;
  journey: GenericApiObject;
};

export type Connection = {
  products: Array<string>;
  from: ConnectionDestinaton;
  to: ConnectionDestinaton;
  sections: Array<ConnectionSection>;
  transfers: number;
};

export type Connections = Array<Connection>;
