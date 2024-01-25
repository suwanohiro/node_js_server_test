import * as net from "net";
import ServerEvent from "../ServerEvent";

export default class EventClose extends ServerEvent {
    constructor() {
        super();
    }

    public override addEvent(sock: net.Socket): void {
        super.addEvent(sock);
        console.log(`${sock.remoteAddress}:${sock.remotePort} との接続が終了しました。`);
    }
}