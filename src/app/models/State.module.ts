export class State {
    id: number;
    state_name: string;
    constructor(data: any) {
        this.id = data.id;
        this.state_name = data.state_name;
    }
}