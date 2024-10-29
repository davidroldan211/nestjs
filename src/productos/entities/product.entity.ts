interface updateWithOptions{
    name?:string;
    description?:string;
    price?:number;
}

export class Product {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
    ){}

    updateWith({name,description,price}: updateWithOptions){
        // Se usa el ?? para decir que si el primero viene vacio o null que use el de la clase 
        this.name = name ?? this.name;
        this.description = description ?? this.description;
        this.price = price ?? this.price;
    }
}
