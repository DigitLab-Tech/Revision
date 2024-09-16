export default class AClass{
    constructor(a, b){
        this.a = a;
        this.b = b;
        this.c = [1, 2, 3, 4, 5];
    }

    test(){
        return this.a + this.b;
    }

    anotherTest(){
        return this.a - this.b;
    }

    anotherAnotherTest(){
        let total = 0;

        for(let i = 0; i < this.c.length; i++){
            total += this.c[i];
        }

        return total;
    }
}

