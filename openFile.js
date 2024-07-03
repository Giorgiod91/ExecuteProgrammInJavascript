const { exec } = require("child_process");

const filePath = "D:\\hhh\\RaiderIO\\RaiderIO.exe";

exec(`cmd.exe /c start "" "${filePath}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing file: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
