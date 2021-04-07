// Dependency Inversion Principle - Принцип инверсии зависимостей
/*
class Fetch {
    request(url){
        //return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class Database {
    constructor(){
        //this.fetch = new Fetch()
        this.localStorage = new LocalStorage()

    }
    getData(){
        //return this.fetch.request('ya.ru')
        return this.localStorage.get('key')
    }
}

const db = new Database()

console.log(db.getData());
*/


class Fetch {
    request(url){
        //return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}


class FetchClient {
    constructor(){
        this.fetch = new Fetch()
    }
    clientGet(url){
        return this.fetch.request(url)
    }
}


class LocalStorageClient {
    constructor(){
        this.localStorage = new LocalStorage()
    }
    clientGet(key){
        return this.localStorage.get(key)
    }
}

class Database {
    constructor(client){
        this.client = client

    }
    getData(key){
        return this.client.clientGet(key)
    }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'));

// $ node 5_DependencyInversionPrinciple/index.js