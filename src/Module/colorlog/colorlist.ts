export const colorlist = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    yellow: "\x1b[33m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: "\x1b[39m"
}

export type colortype = "black" | "red" | "green" | "blue" | "yellow" | "magenta" | "cyan" | "white" | "reset";

/*
export class colorlists {
    public static array = {
        black: "black"
    };


    public test() {
        colorlist.array["black"]
    }

    public static black: string = "\x1b[30m";
    public static red: string = "\x1b[31m";
    public static green: string = "\x1b[32m";
    public static blue: string = "\x1b[34m";
    public static yellow: string = "\x1b[33m";
    public static magenta: string = "\x1b[35m";
    public static cyan: string = "\x1b[36m";
    public static white: string = "\x1b[37m";
    public static reset: string = "\x1b[39m";
}

export type colortype = "black" | "red" | "green" | "blue" | "yellow";
*/