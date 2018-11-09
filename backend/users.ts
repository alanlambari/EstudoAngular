
export class User {
    constructor(
            public email: string,
            public name: string,
            private password: string){}

        matches(another: User): boolean {
            return another !== undefined &&
            another.email === this.email &&
            another.password === this.password
        }
}

export const Users: {[key: string]: User} = {
    "alanlambari@gmail.com": new User('alanlambari@gmail.com', 'Alan', 'alan123'),
    "rafaela@gmail.com": new User('rafaela@gmail.com', 'Rafaela', 'rafaela123')

}