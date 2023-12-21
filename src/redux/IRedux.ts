// Define the interface for the auth state

export interface User {
    id: number;
    username: string;
  }




  
export interface response {
message?:String,
status?:Number,
data?:Object
}

export interface AuthState {
  loading: boolean;
  tokenFromRedux:string;
}

export interface rejectedPayload {
  status: number;
  message: string;
  data: any[];
}
