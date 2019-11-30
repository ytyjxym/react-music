export default class Observe{
    constructor(){
        this.handleArr = []
    }
    on(name,handle){
        if(Object.prototype.toString.call(name).indexOf('String') !== -1){
            throw Error(`${name} is not a  string`);
        }else if (Object.prototype.toString.call(name).indexOf('Function') !== -1){
            throw Error(`${handle} is not a  function`);
        }else{
            this.handleArr.push({[name]:handle})
        }
    }
    emit(name,...arg){
        if(Object.prototype.toString.call(name).indexOf('String') !== -1){
            throw Error(`${name} is not a  string`);
        }else{
            this.handleArr.find(item=>(item[name]))[name](arg)
        }
    }
}
