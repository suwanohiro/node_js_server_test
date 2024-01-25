import * as net from "net";
import ServerEvent from "../ServerEvent";
import colorlog from "../../Module/colorlog/colorlog";

export default class EventReceive extends ServerEvent {
    constructor() {
        super();
    }

    public override addEvent(sock: net.Socket): void
    public addEvent(sock: net.Socket, data: Buffer): void
    public addEvent(sock: net.Socket, data: Buffer | undefined = undefined) {
        if (data == undefined) return;
        super.addEvent(sock);

        colorlog.info(`${this.getClientAddress()} から受信 : ${data}`);

        sock.write(`You Said ${data}`);

        setTimeout(() => {
            this.sendClient("close");
        }, 5000);
    }
}