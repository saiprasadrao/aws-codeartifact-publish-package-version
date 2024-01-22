/**
 * 
 *
 * @param {string} folder The folder name provided will be zipped.
 * @param {string} zipFileName Name of the tar.gz file to be created.
 * 
 */
const exec = require('@actions/exec');
const fs = require("fs");
import { createHash } from "crypto";

let myOutput = '';
let myError = '';

async function creategzFile(folder, zipFileName=temp.tar.gz) {
    await exec.exec('tar', ['-czvf', zipFileName, folder]);
    const buff = fs.readFileSync(zipFileName);
    const hash = createHash("sha256").update(buff).digest("hex");
    return hash;
}  
module.exports = { creategzFile }