    import { spawn } from "child_process";
    import path from "path";

    export const runPythonRunner = (
        keyword: string
    ): Promise<any> => {
        return new Promise((resolve, reject) => {
            console.log("Running Python with keyword:", keyword);
            const pythonPath = 
                process.env.PYTHON_PATH || 'python3'
            const pythonProcess = spawn(pythonPath, [
                "-m",
                "nlp.pipeline",
                keyword
            ],
            {
                cwd: "./python"
            }
        );

            let dataBuffer = "";
            let errorBuffer = "";

            console.log(
                "PYTHON PATH FROM ENV:",
                process.env.PYTHON_PATH
            );

            pythonProcess.on("error", (error) => {
            console.error("SPAWN FAILED:", error);
            reject(error);
            });

            pythonProcess.stdout.on("data", (data) => {
                dataBuffer += data.toString();
                console.log("python raw output: ", dataBuffer);
            });

            pythonProcess.stderr.on("data", (data) => {
                errorBuffer += data.toString();
                console.log("PYTHON STDERR: ", errorBuffer);
            });

            pythonProcess.on("close", (code) => {
                if (code !== 0) {
                    reject(
                        new Error(
                            "SCRAPER_FAILED"
                        )
                    );
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