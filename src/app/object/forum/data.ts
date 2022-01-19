import { Users } from "./users";

export class Data {
    createdDate !: Date;
    title !: string;
    content !: string;
    id !: bigint;
    user !: Users;
}
