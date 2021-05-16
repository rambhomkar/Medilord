export class Doctors {
    public id?: number;
    public name!: string;
    public qualification: string | undefined;
    public specialist !: string;
    public contactNumber!: number; 
    public interestToSupport !: string;
    public availibility !:string;  
    
    constructor(
    ) { }
}