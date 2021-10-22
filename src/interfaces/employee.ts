export interface IEmployee {
    id: string;
    name: string;
    title:string;
    email: string;
    picture: string;
    state: string;
}

export enum States {
    ADDED = 'Added',
    IN_CHECK = 'In-check',
    APPROVED = 'Approved',
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
  }
