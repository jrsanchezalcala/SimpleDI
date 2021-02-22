
export class DI {
    static services : any = [];
    static get(TypeElement : any){
        if(!TypeElement)
        throw new Error("Tipo o servicio indefinido");
        if(typeof TypeElement === "string"){
            for(let item of this.services){
                if(item.name == TypeElement){
                    return item.service;
                }
            }
        }
        else{
            for(let item of this.services){
                if( item.service  instanceof TypeElement){
                    return item.service;
                }
            }
        }
    }

    static add(service : any , name : string | null = null ){
        if(name){
            for(let item of this.services){
                if(item.name == name){
                    throw new Error("Ya existe un servicio con este nombre");
                }
            }
        }
        this.services.push({service : service, name : name});
    }    

    static del(TypeElement : any){
        if(!TypeElement)
        throw new Error("Tipo o servicio indefinido");
        if(typeof TypeElement === "string"){
            let cont = 0;
            for(let item of this.services){
                if(item.name == TypeElement){
                    this.services.splice(cont,1);
                }
                cont++;
            }
        }
        else{
            for(let item of this.services){
                let cont = 0;
                if( item.service  instanceof TypeElement){
                    this.services.splice(cont,1);
                }
                cont++;
            }
        }
    }

    




  





}
