export interface Customer
{
    id : number,
    firstName : string,
    lastName? : string,
    phoneNumber: string,
    postalCode? : string,
    address? : string
    status : CustomerStatus
    orderType: OrderType
    email?: string
    // details? : CustomerDetail[]
    createdOn? : string
    modifiedOn? : string
    notes?: string
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

  export enum OrderType{
    TiffinService,
    Catering
  }
