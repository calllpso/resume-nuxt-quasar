export namespace Card {
  export interface User {
    firstName  : string,             
    lastName   : string,             
    title      : string,         
    yourPhoto  : Blob,             
    address    : string,           
    phoneNumber: string,               
    Email      : string,         
    desciption : string,               
  }

  export interface Experience{
      position: string,
      company: string,
      city: string,
      from: string,
      to: string,
    }

  export interface Education{
    "university name": string,
    city: string,
    degree: string,
    subject: string,
    from: string,
    to: string,
  }
}

export namespace fillCard {
  export function user(): Card.User {
    return {
      firstName: null,
      lastName: null,
      title: null,
      yourPhoto: null,
      address: null,
      phoneNumber: null,
      Email: null,
      desciption: null,
    };
  }
  export function experience(): Card.Experience {
    return {
      position: null,
      company: null,
      city: null,
      from: null,
      to: null,
    };
  }

  export function education(): Card.Education {
    return {
      'university name': null,
      city: null,
      degree: null,
      subject: null,
      from: null,
      to: null,
    };
  }
  
}