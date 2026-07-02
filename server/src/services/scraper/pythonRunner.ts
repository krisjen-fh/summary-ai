    import { spawn } from "child_process";

    export const runPythonRunner = (
        keyword: string
    ): Promise<any> => {
        return new Promise((resolve, reject) => {
            console.log("Running Python with keyword:", keyword);
            const pythonProcess = spawn("python3", [
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