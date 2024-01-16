export class returnedValue {
    id: number = 0


    getValue() {
        return `id: ${this.id} \n Date: ${new Date()}`
    }
}