import {makeAutoObservable} from "mobx";

export default class ShopingCartStore{
    constructor() {
        this._itemes = [];
        makeAutoObservable(this);
    }

    setItems(items) {
        this._itemes = [...items];
    }

    getItems() {
        const itemIds = [...this._itemes];
        return itemIds;
    }

    getCounter() {
        return [...this._itemes].reduce((prev, next) => {
          return prev + next.quantity
        }, 0);
      }
    
      getTotalPrice() {
        let totalPrice = 0;
        totalPrice = this._itemes.reduce((prev, next) => {
          return prev + (next.items.price * next.quantity);
        }, 0);
    
        return totalPrice;
      }
};