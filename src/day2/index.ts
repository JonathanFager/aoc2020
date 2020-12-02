import * as path from "path";
import { readInputSplit } from "../helpers/readInput";

const main = async () => {
    const input = await readInputSplit(path.join(__dirname, "./input.txt"));



    console.time("main");
        var passes:number = 0;
        var i:number = 0;
        for (const raw of input) {
            const arrayOfStrings = raw.split(/[\s:-]+/,4);
            //console.log(arrayOfStrings);
            const lower = parseInt(arrayOfStrings[0]);
            const upper = parseInt(arrayOfStrings[1]);
            const key = arrayOfStrings[2];
            const password = arrayOfStrings[3];
            //console.log("Lower is: ", lower, "Upper is: ", upper);
            //console.log("key is: ", key, "Pass is: ", password);
            var re = new RegExp(key,"g");
            var count = (password.match(re) || []).length;
            //console.log("Count is:", count, "Pass is: ", password);
            if (count >= lower && count <= upper){
                i++;
                passes++;
            }else{
                i++;
                console.log(i, "did not pass");
            //console.log("Lower is: ", lower, "Upper is: ", upper);
            //console.log("key is: ", key, "Pass is: ", password);
            //console.log("Count is:", count, "Pass is: ", password);
            }
            
        }
    console.log("Total passes:", passes)
    console.timeEnd("main");
    
};

main();
