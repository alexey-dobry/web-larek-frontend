import { ICart } from '../../types';
import { cloneTemplate, createElement, ensureElement } from '../../utils/utils';
import { Component } from '../base/Components';
import { EventEmitter } from '../base/events';

export class Basket extends Component<ICart> {
	protected _list: HTMLElement;
	protected _total: HTMLElement;
	protected _button: HTMLElement;

	constructor(protected events: EventEmitter,data: HTMLElement) {
		super(data);
	};

	set items(items: HTMLElement[]) {};

	set selected(items: string[]) {};

	set total(total: number) {};
}