type Move = 'down' | 'up' | 'right' | 'left'

const streetFighterSelection = (fighters: string[][], position: number[], moves: Move[]):string[] => {
    let hoverChar: string[] = [];

    moves.forEach((move:Move) => {
        //Create a switch to interact with position array, the idea is to have a coordenates system
        switch (move) {
            case 'down':
                if (position[0] == 0) position[0] += 1;
                break;
            case 'up':
                if (position[0] == 1) position[0] -= 1
                break;
            case 'right':
                position[1] == 5?position[1] = 0:position[1] += 1
                break;
            case 'left':
                position[1] == 0?position[1] = 5:position[1] -= 1
                break
        }

        //Time to save every character we "visited" (by hovering), each movement it registers the character on the position that you are 
        //First file of characters
        if (position[0] == 0) {
            fighters[0].forEach((fighter, index:number) => {
                if (position[1] == index) {
                    hoverChar.push(fighters[0][index])
                }
            })
        }
        //Second file of characters
        else {
            fighters[1].forEach((fighter, index:number) => {
                if (position[1] == index) {
                    hoverChar.push(fighters[1][index])
                }
            })
        }

    })
    return hoverChar
}

// Testing

// let fighters: string[][] = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ];
// let moves: Move[] = []


// console.log(streetFighterSelection(fighters, [0, 0], moves))   //,[];

// moves = ['up', 'left', 'right', 'left', 'left'];
// console.log(streetFighterSelection(fighters, [0, 0], moves))//,['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);

// moves = ["left", "left", "left", "left", "left", "left", "left", "left"];
// console.log(streetFighterSelection(fighters, [0, 0], moves))//,['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog'];


// moves = ['up', 'down', 'right', 'up', 'left'];
// console.log(streetFighterSelection(fighters, [0, 0], moves))//,[ 'Ryu', 'Ken', 'Chun Li', 'E.Honda', 'Ryu' ]);

// moves = ['up', 'up', 'up'];
// console.log(streetFighterSelection(fighters, [0, 3], moves))//,[ 'Guile', 'Guile', 'Guile' ]

// moves = ["up", "left", "down", "right", "up", "left", "down", "right"];
// console.log(streetFighterSelection(fighters, [0, 0], moves))//,['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken'];