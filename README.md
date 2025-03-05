# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Описание данных
Основные интерфейсы и типы:

- **Category**: Категория товара.

```typescript
type Category = 
  'софт-скил' | 
  'хард-скил' |
  'кнопка' |
  'другое'|
  'дополнительное';
```
- **ICart**: Описывает корзину.

```typescript
interface ICart {
   // товары в корзине
  items: IProduct[];
   // стоимость товаров в корзине
  totalCost: number;
}
```
- **IProduct**: Описывает структуру объекта продукта.

```typescript
interface IProduct {
  // id товара
  id: string; 
  // название товара
  name: string;
  // описание товара
  description: string; 
  // иконка товара
  icon: string; 
  // цена товара
  cost: number | null; 
  // категория товара
  category: Category; 
  // добавлен ли товар в корзину
  inCart: boolean; 
}
```
- **IAppState**: Описывает состояние приложения.

```typescript
interface IAppState {
   // каталог товаров
  catalog: ICatalog;
  // корзина с товарами
  cart: ICart; 
  // доставка
  delivery: IDeliveryForm | null; 
  // контакты
  contact: IContactForm | null; 
  // заказ
  order: IOrder | null; 
}
```
- **IDeliveryForm**: Определяет структуру данных для формы данных по доставке.

```typescript
interface IDeliveryForm {
  // способ оплаты заказа
  payment: string; 
  // адрес доставки заказа
  address: string; 
}

```

- **IOrder**: Определяет структуру объекта заказа.
```typescript
// наследуется от интерфейсов IDeliveryForm, IContactForm
interface IOrder extends IDeliveryForm, IContactForm { 
  // корзина
  cart: ICart; 
  // стоимость заказа
  total: number; 
}
```


**IContactForm**: Определяет структуру данных для формы контактной информации.

```typescript
interface IContactForm {
  // электронная почта
  email: string; 
  // номер телефона
  phone: string; 
}
```

## Модели данных

### Класс <code>Component</code>

Базовый класс предназначен для управления компонентом.

- <code>render</code> - предназначен для отрисовки компонента.
- <code>setText</code> - предназначен для установки текста внутри текстовых полей
- <code>setImage</code> - предназначен для установки изображения.
- <code>setDisabled</code> - устанавливает кнопке атрибут disabled.
- <code>setHidden</code> - скрывает передаваемый элемент.
- <code>setVisible</code> - показывает передаваемый элемент.
- <code>toggleClass</code> - предназначен переключения классов у элемента.

### Класс <code>Model</code>

Абстрактный класс определяющий базовую структуру для моделей в приложении. Необходим для работы с данными в приложении,управлением состоянием.

### Компоненты представления

### Basket

Будет наследовать <code>Component</code>.

Содержит:

- <code>list</code> - элемент разметки содержащий список добавленных в корзину товаров.
- <code>total</code> - элемент разметки содержащий итоговую стоимость.
- <code>button</code> - элемент разметки содержащий кнопку для оформления заказа.
- <code>setItems</code> - метод принимающий элементы разметки(товары) и формирующий list.
- <code>setTotal</code> - метод принимающий число, и устанавливающий итоговую стоимость в элемент разметки.

### Form

Будет наследовать <code>Component</code>

Содержит:

- <code>submit</code> - элемент разметки(кнопка), дающая возможность перейти на следующий шаг оформления заказа.
- <code>errors</code> - элемент разметки содержащий итоговую стоимость.
- <code>render</code> - метод который обновляет состояние компонента на основе переданного состояния.

### Modal

Будет наследовать <code>Component</code>

Содержит:

- <code>closeButton</code> - элемент разметки содержащий кнопку закрытия модального окна.
- <code>content</code> - элемент разметки содержащий контент который будет отображен внутри модального окна.
- <code>setContent</code> - метод устанавливающий континт внутри модального окна.
- <code>render</code> - метод который отображает модальное окно на основе переданных ему данных.
- <code>close</code> - метод закрывающий модальное окно.
- <code>open</code> - метод открывающий модальное окно.

