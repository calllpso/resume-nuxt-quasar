export interface User {
  firstName: string,
  lastName: string,
  title: string,
  yourPhoto: File | null,
  address: string,
  phoneNumber: string,
  Email: string,
  desciption: string,
}

export interface Experience {
  position: string,
  company: string,
  city: string,
  from: string,
  to: string,
}

export interface Education {
  "university name": string,
  city: string,
  degree: string,
  subject: string,
  from: string,
  to: string,
}