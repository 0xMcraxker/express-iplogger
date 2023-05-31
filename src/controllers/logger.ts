import { Request, Response } from "express";
import path from "path";

export const Logger = (req: Request, res: Response) => {
    const ip: string = Array.isArray(req.headers['x-forwarded-for'])
        ? (req.headers['x-forwarded-for'][0] as string)
        : (req.headers['x-forwarded-for'] || req.headers["x-real-ip"] || req.socket.remoteAddress || "") as string;

    console.log(`IP: ${ip} | METHOD: ${req.method} | UA: ${req.headers["user-agent"]}`);

    return res.status(404).sendFile(path.join(__dirname, "..", "static", "index.html"));
}