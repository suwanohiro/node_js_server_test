import * as net from "net";
import ServerEvent from "../ServerEvent";
import { colorlist } from "../../Module/colorlog/colorlist";
import colorlog from "../../Module/colorlog/colorlog";

export default class EventClose extends ServerEvent {
    constructor() {
        super();
    }

    public override addEvent(sock: net.Socket): void {
        super.addEvent(sock);
        colorlog.info(`${this.getClientAddress()} との接続が終了しました。`);
    }
}