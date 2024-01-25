import * as net from "net";
import ServerEvent from "../ServerEvent";

export default class EventReceive extends ServerEvent {
    constructor() {
        super();
    }

    public override addEvent(sock: net.Socket): void
    public addEvent(sock: net.Socket, data: Buffer): void
    public addEvent(sock: net.Socket, data: Buffer | undefined = undefined) {
        if (data == undefined) return;

        super.addEvent(sock);

        console.log(`${sock.remoteAddress}:${sock.remotePort} Says : ${data}`);

        sock.write(`You Said ${data}`);
    }
}