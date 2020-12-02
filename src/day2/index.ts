import * as path from "path";
import { readInputSplit } from "../helpers/readInput";

const main = async () => {
  const input = await readInputSplit(path.join(__dirname, "./input.txt"));

  console.time("main");
  part1();
  part2();

  function part1() {
    console.time("part1");
    var passes: number = 0;
    var i: number = 0;
    for (const raw of input) {
      const arrayOfStrings = raw.split(/[\s:-]+/, 4);
      var re = new RegExp(arrayOfStrings[2], "g");
      var count = (arrayOfStrings[3].match(re) || []).length;
      if (
        count >= parseInt(arrayOfStrings[0]) &&
        count <= parseInt(arrayOfStrings[1])
      ) {
        passes++;
      }
    }
    console.log("Total passes:", passes);
    console.timeEnd("part1");
  } //end part 1

  function part2() {
    console.time("part2");
    var passes: number = 0;
    for (const raw of input) {
      const arrayOfStrings = raw.split(/[\s:-]+/, 4);
      const key = arrayOfStrings[2];
      const password = arrayOfStrings[3];
      const lowerPosition = password.charAt(parseInt(arrayOfStrings[0]) - 1);
      const upperPosition = password.charAt(parseInt(arrayOfStrings[1]) - 1);
      if (lowerPosition == key || upperPosition == key) {
        if (upperPosition != lowerPosition) {
          passes++;
        }
      }
    }
    console.log("Total passes:", passes);
    console.timeEnd("part2");
  } //end part 2
  console.timeEnd("main");
};

main();
