import { Socket } from "net";
import ServerEvent from "../ServerEvent";
import colorlog from "../../Module/colorlog/colorlog";

export default class EventError extends ServerEvent {
    constructor() {
        super();
    }

    public override addEvent(sock: Socket): void
    public addEvent(sock: Socket, error: Error): void
    public addEvent(sock: Socket, error: Error | undefined = undefined) {
        if (error == undefined) return;

        super.addEvent(sock);

        colorlog.error(`${this.getClientAddress()} 接続エラー： ${error}`);
    }
}