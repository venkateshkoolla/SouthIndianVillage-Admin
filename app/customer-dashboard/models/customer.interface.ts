export interface Customer{
    id : number,
    firstName : string,
    lastName? : string,
    phoneNumber: string,
    postalCode? : string,
    address? : string
    // Active? : boolean,
    status : CustomerStatus
    details? : CustomerDetail[]
  }
  
export   interface CustomerDetail{
    customNotes : string
  }

  export enum CustomerStatus{
    Active = 1 ,
    Enquiry = 2,
    Closed = 3,
    Hold = 4   
  }