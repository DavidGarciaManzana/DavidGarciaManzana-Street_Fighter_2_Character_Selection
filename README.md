# Street Fighter 2 - Character Selection

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

<p align="center">
  <img src="img/sf.jpg" alt="Street Fighter Character Selection Screen" title="SF Char Select">
</p>

- Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);

- Output

The list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);


- Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

## Installation

Install my-project with npm

```bash
  cd my-project
  npm install typescript --save-dev
  tsc --init
```
    
## Usage/Examples

```javascript
tsc --watch
```


## Authors

- [@DavidGarciaManzana](https://github.com/DavidGarciaManzana)


## Acknowledgements

 - [Street Fighter 2 Character Selection - Codewars](https://www.codewars.com/kata/5853213063adbd1b9b0000be)


