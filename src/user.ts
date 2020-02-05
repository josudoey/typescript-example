interface UserInterface {
    name: string;
    age: number;
    say(message: string): void
}


export class User implements UserInterface {
    name: string; age: number;
    constructor(params: { name: string, age: number }) {
        Object.assign(this, params)
    }
    say(message: string): void {
        console.log(`${this.name}(${this.age}): ${message}`)
    }
}