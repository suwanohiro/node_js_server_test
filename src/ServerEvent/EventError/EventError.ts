import { Socket } from "net";
import ServerEvent from "../ServerEvent";

export default class EventError extends ServerEvent {
    constructor() {
        super();
    }

    public override addEvent(sock: Socket): void
    public addEvent(sock: Socket, error: Error): void
    public addEvent(sock: Socket, error: Error | undefined = undefined) {
        if (error == undefined) return;

        super.addEvent(sock);

        console.error(`${sock.remoteAddress}:${sock.remotePort} 接続エラー： ${error}`);
    }
}