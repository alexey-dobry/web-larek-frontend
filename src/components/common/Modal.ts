import { IModal, IEvents } from "../../types";
import { Component } from "../base/Components";

export class Modal extends Component<IModal> {
    _closeButton: HTMLButtonElement;
    _content: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
    };
    open() {};
    close() {};
    render(data: IModal): HTMLElement {return;};
    setContent(data: HTMLElement): HTMLElement {return;};
}