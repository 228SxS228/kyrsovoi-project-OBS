import {makeAutoObservable} from "mobx";

export default class ItemStore {

    constructor() {
        this._types = []
        this._brands = []
        this._itemes = []
        this._selectedBrand = {}
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this);
    }

    setSelectedTypes(type) {
        this.setPage(1)
        this._selectedType = type;
    }

    setSelectedBrand(brands) {
        this.setPage(1)
        this._selectedBrand = brands;
    }

    setPage(page) {
        this._page = page;
    }

    setLimit(limit) {
        this._limit = limit;
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount;
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setItemes(itemes) {
        this._itemes = itemes;
    }

    get Pages() {
       return this._page ;
    }

    get Limits() {
        return this._limit ;
    }
    get TotalCount() {
        return this._totalCount ;
    }
 

    get Types() {
        return this._types ;
    }

    get Brands() {
        return this._brands;
    }

    get Itemes() {
        return this._itemes;
    }

    get selectedType() {
        return this._selectedType;
    }

    get SelectedBrand() {
        return this._selectedBrand;
    }

}