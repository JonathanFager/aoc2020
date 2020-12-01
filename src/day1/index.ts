import * as path from "path";
import { readInputSplitNum } from "../helpers/readInput";

const main = async () => {
    const input = await readInputSplitNum(path.join(__dirname, "./input.txt"));
    part1();
    part2();

    function part1() {
        console.time("part1");
        for (const value1 of input) {
            for (const value2 of input) {
                if (value1 + value2 === 2020) {
                    console.log("Result from part 1 is: ", value1 * value2);
                    console.log("The values are:", value1, value2);
                    console.timeEnd("part1");
                    return;
                }
            }
        }

        /*

Ugly loops as a test just to try if i remember it correctly.

for (let i = 0; i < input.length; i++) {
    const value1 = input[i];
    for (let j = 0; j < input.length; j++) {
        const value2 = input[j];
        if (value1 + value2 === 2020) {
            console.log("Ugly: Result from part 1 is: ", value1 * value2);
        }
    }
  } 
*/
    }
    function part2() {
        console.time("part2");

        for (const value1 of input) {
            for (const value2 of input) {
                for (const value3 of input) {
                    if (value1 + value2 + value3 === 2020) {
                        console.log(
                            "Result from part 2 is: ",
                            value1 * value2 * value3
                        );
                        console.log("The values are:", value1, value2, value3);
                        console.timeEnd("part2");
                        return;
                    }
                }
            }
        }
    }
};

main();
