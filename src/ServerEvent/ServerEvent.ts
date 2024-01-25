import * as net from "net";

export default class ServerEvent {
    protected _sock: net.Socket;

    constructor() {
        this._sock = new net.Socket();
    }
    public addEvent(sock: net.Socket) {
        this._sock = sock;
    }
}