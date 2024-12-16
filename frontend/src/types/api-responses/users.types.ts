export interface IUser {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
	address: string;
}

export interface IUserEndpointResponseData {
	page: number;
	users: IUser[];
}
export interface IUserCountEndpointResponseData {
	count: number;
}
