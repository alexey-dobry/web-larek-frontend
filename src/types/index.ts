export type Category = 
	'софт-скил' | 
	'хард-скил' |
	'кнопка' |
	'другое'|
	'дополнительное';

export interface IProduct {
	id: string;
	name: string;
	description: string;
	icon: string;
	cost: number | null;
	category: Category;
	inCart: boolean;
}

interface ICatalog {
  items: IProduct[];
}

export interface ICart {
	items: IProduct[];
	totalCost: number;
}

interface IOrder extends IDeliveryForm, IContactForm {
	cart: ICart;
	total: number;
}

interface IAppState {
	catalog: ICatalog;
	cart: ICart;
	delivery: IDeliveryForm | null;
	contact: IContactForm | null;
	order: IOrder | null;
	clearCart(): void;
	clearOrder(): void;
	setCatalog(): void;
	addToCart(): void;
	removeFromCart(): void;
	updateCart(): void;
	takeDeliveryField(field: keyof IDeliveryForm, value: string): void;
	takeContactField(field: keyof IContactForm, value: string): void;
	validateDelivery(): boolean;
	validateContact(): boolean;
}

interface IDeliveryForm {
	payment: string;
	address: string;
}

interface IContactForm {
	email: string;
	phone: string;
}

export interface IFormState {
	valid: boolean;
	errors: string[];
}

export interface IModal {
  content: HTMLElement;
}

export type EventName = string | RegExp;

export type Subscriber = Function;

export type EmitterEvent = {
	eventName: string,
	data: unknown
};



export interface IEvents {
	on<T extends object>(event: EventName, callback: (data: T) => void): void;
	emit<T extends object>(event: string, data?: T): void;
	trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}

export type ApiListResponse<Type> = {
	total: number,
	items: Type[]
};