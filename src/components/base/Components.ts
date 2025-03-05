export abstract class Component<T> {
  constructor(protected container: HTMLElement) {};
  render(data?: Partial<T>): HTMLElement {
    return;
  };
  toggleClass(element: HTMLElement, className: string) {};
  setHidden(element: HTMLElement) {};
  setVisible(element: HTMLElement) {};
  setDisabled(element: HTMLElement, state: boolean) {};
  setText(element: HTMLElement, value: unknown) {};
  setImage(element: HTMLImageElement, src: string, alt?: string) {};
}