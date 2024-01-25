import * as net from "net";

export default class ServerEvent {
    protected _sock: net.Socket | undefined;

    constructor() {
        this._sock = undefined;
    }
    public addEvent(sock: net.Socket) {
        this._sock = sock;
    }
    protected getClientAddress(): string {
        if (this._sock == undefined) return "";
        return `${this._sock.remoteAddress}:${this._sock.remotePort}`;
    }

    protected sendClient(msg: string): void {
        if (this._sock == undefined) return;

        this._sock.write(msg);
    }
}