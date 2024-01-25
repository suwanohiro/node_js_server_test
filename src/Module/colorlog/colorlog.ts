import moment from "moment";
import { colorlist, colortype } from "./colorlist";

type logtype = "log" | "error" | "info" | "warn" | "success" | "other";

export default class colorlog {
    public static log(msg: any): void {
        this.custom(msg, "log", "black");
    }

    public static error(msg: any): void {
        this.custom(msg, "error", "red");
    }

    public static info(msg: any): void {
        this.custom(msg, "info", "cyan");
    }

    public static warn(msg: any): void {
        this.custom(msg, "warn", "yellow");
    }

    public static success(msg: any): void {
        this.custom(msg, "success", "green");
    }

    public static custom(msg: any, type: logtype, color: colortype): void {
        console.log(this.__createMessage(msg, type, color));
    }

    private static __createMessage(msg: any, type: logtype, color: colortype): string {
        const time: string = moment().format("YYYY/MM/DD HH:mm:ss");

        // 本文
        const message: string = `${time} | ${type}\t| ${msg}`;

        return colorlist[color] + message + colorlist["reset"];
    }
}