import { useState, useEffect } from 'react';

const GameMenu = ({setWordsQuantity}) => {
    return (
        <section>
            <h1>Game Menu</h1>
            <div>
                <button onClick={() => setWordsQuantity(20)}>20</button>
                <button onClick={() => setWordsQuantity(50)}>50</button>
                <button onClick={() => setWordsQuantity(80)}>80</button>
                <button onClick={() => setWordsQuantity(100)}>100</button>
            </div>
        </section>
    );
}

const Game = ({words}) => {
    // states
    const [ wordsQuantity, setWordsQuantity ] = useState(0);
    const [ playing, setPlaying ] = useState(false);
    const [ wordsInGame, setWordsInGame ] = useState([]);

    // functions
    const sortRandomly = (a, b) => 0.5 - Math.random(); 

    const generateWords = () => {
        let wordsCopy = [...words];
        const wordsArr = [];

        while (wordsArr.length < wordsQuantity) {
            if (wordsCopy.length === 0) {
                wordsCopy = [...words]
            }

            wordsArr.push(wordsCopy.sort(sortRandomly).pop());
        }

        setWordsInGame(wordsArr);
    };

    const startGame = () => {
        generateWords();
    };

    // use effect
    useEffect(() => {
        console.log(wordsInGame);

        if (wordsQuantity > 0 && !playing) {
            setPlaying(true);
            
            // start the game!
            startGame();
        }

    }, [wordsQuantity]);

    return (
        <GameMenu setWordsQuantity={setWordsQuantity} />
    )
};

export { Game };

/*
 * TODO:
*/
