export interface Customer{
    Id : number,
    FirstName : string,
    LastName? : string,
    PhoneNumber: string,
    PostalCode? : string,
    Address? : string
    // Active? : boolean,
    Status : CustomerStatus
    Details? : CustomerDetail[]
  }
  
export   interface CustomerDetail{
    CustomNotes : string
  }

  export enum CustomerStatus{
    Active = 1 ,
    Enquiry = 2,
    Closed = 3,
    Hold = 4   
  }