import { State } from 'src/app/models/State.module'

export class Park {
    id: number;
    national_park_name: string;
    state: State;
    constructor(data: any) {
        this.id = data.id;
        this.national_park_name = data.national_park_name;
        this.state = data.state;
    }
}