# Advent of Code Template TS

Faggelagges implementation of the Advent of Code challenges written in TypeScript.

The template for this repository was shamefully copied from [Soma Zsják](https://github.com/sanraith)

## The template came with the following functions:
#### There are 4 different functions that parse your input:
* `readInputRaw` - reads the input raw, does not modify it
* `readInputSplit` - reads the input and splits it by line
* `readInputSplitNum` - reads the input and splits it by line, then converts every line to a number
* `readInputGrid` - reads the input and splits it by line, then splits each one by character to make a 2D grid

#### If you want to display a grid, there are 2 different functions. Each takes in a grid (a 2D array) and an optional replacer. Both function identically without the replacer, but the implementations of the replacer are different.
Don't really know what I'll use these functions down here for right now but sure....
* `displayGridObjConfig` - takes a key/value pair and maps each value in the grid that matches the key to the value
* `displayGridFuncConfig` - takes a function that maps a grid value to a string, and executes it on each value (if the function returns nothing for a particular value, it is unmodified)

 *There are scripts to run each day with `ts-node`. Each script name is "day" followed by the number. For example, Day 18's puzzle executed via npm would look like `npm run day18`.*
