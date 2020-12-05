import * as path from "path";
import { readInputGrid, readInputSplit, readInputRaw, readInputGrid2 } from "../helpers/readInput";

const main = async () => {
    const input = await (
        await (await readInputRaw(path.join(__dirname, "./input.txt"))).split("\r\n"));

    part1(input);
    part2(input);
};

function part1(input: string[]) {

    const result = findPath(3, 1, input);
    console.log("Total encountered trees for slope: X:", result[0], "Y:", result[1], "are", result[2]);
};

function part2(input: string[]) {
    var allResults: number[] = [];
    var answer!: number;
    const slopesToCheck = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ];
    console.log(slopesToCheck.length)
    for (let i = 0; i < slopesToCheck.length; i++) {
        const values = slopesToCheck[i]
        const result = findPath(values[0], values[1], input)
        allResults.push(result[2]); 
        console.log("Total encountered trees for slope: X:", result[0], "Y:", result[1], "are", result[2]);
    }
    console.log(allResults);
    answer = allResults[0];
    for (let index = 1; index < allResults.length; index++) {
        answer = answer * allResults[index];        
    }
    console.log("The result for part two is:", answer);

};

function findPath(slopeX: number, slopeY: number, input: string[]): number[] {
    var tree: number = 0;
    var index: number = 0;
    for (let i = slopeY; i < input.length; i = i + slopeY) {
        const line = input[i].split("");
        var index: number = (index + slopeX) % line.length;
        if (line[index] == "#") {
            tree++;
            //console.log(line)
            //console.log("Index is:", index, "Output is:", line[index])
        }
    }
    const output: number[] = [slopeX, slopeY, tree];
    //console.log("Total encountered trees for slope: X:",slopeX,"Y:",slopeY,"are", tree);
    return (output);
}

main();

