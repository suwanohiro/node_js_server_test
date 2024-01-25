import * as net from "net";
import EventReceive from "./ServerEvent/EventReceive/EventReceive";
import EventClose from "./ServerEvent/EventClose/EventClose";
import EventError from "./ServerEvent/EventError/EventError";

export default class TCPServer {
    private _host: string;
    private _port: number;

    private _serverBody: net.Server | undefined;

    private _eventReceive: EventReceive;
    private _eventClose: EventClose;
    private _eventError: EventError;

    constructor(host: string, port: number) {
        this._host = host;
        this._port = port;

        this._eventClose = new EventClose();
        this._eventReceive = new EventReceive();
        this._eventError = new EventError();

        this._serverBody = undefined;
    }

    get HOST() {
        return this._host;
    }

    get PORT() {
        return this._port;
    }

    // サーバー処理を開始
    public start(): void {
        this._serverBody = net.createServer((sock: net.Socket) => { this.__onClientConnection(sock); });
        this._serverBody.listen(this.PORT, this.HOST, () => {
            console.log(`TCPサーバーを ${this.HOST}:${this.PORT} で起動しました。`);
        });
    }

    private __onClientConnection(sock: net.Socket): void {
        console.log(`${sock.remoteAddress}:${sock.remotePort} が接続しました。`);

        // データを受け取った時の処理
        sock.on("data", (data) => { this._eventReceive.addEvent(sock, data); });

        // 接続が終了した時の処理
        sock.on("close", () => { this._eventClose.addEvent(sock); });

        // エラー時の処理
        sock.on("error", (error) => { this._eventError.addEvent(sock, error); });
    }
}