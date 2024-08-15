export class User{
    phoneNumber:string;
    balance:number;

    constructor(phonuNumber:string,balance:number=0){
        this.balance = balance;
        this.phoneNumber=phonuNumber;
    } 
}