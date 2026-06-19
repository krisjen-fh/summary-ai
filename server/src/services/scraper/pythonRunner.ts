// spawn python process
// read stdout
// convert JSON
// return data

import { spawn } from "child_process";

export const getbatamNewsArticles = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn("python/venv/Scripts/python.exe", [
            "./python/batamnews/scraper.py"
        ]);

        let dataBuffer = "";
        let errorBuffer = "";

        pythonProcess.stdout.on("data", (data) => {
            dataBuffer += data.toString();
        });

        pythonProcess.stderr.on("data", (data) => {
            errorBuffer += data.toString();
        });

        pythonProcess.on("close", (code) => {
            if (code !== 0) {
                reject(errorBuffer);
                return;
            }

            try {
                const result = JSON.parse(dataBuffer);
                resolve(result);
            } catch (error) {
                reject("Failed parsing JSON");
            }
        });
    });
};