import { useState, useEffect } from 'react';

const GameMainMenu = ({setWordsQuantity, setScreen}) => {
    return (
        <section>
            <div className="screen__title">
                <h1>Game Menu</h1>
                <button onClick={() => setScreen('home')}>X</button>
            </div>

            <div>
                <button onClick={() => setWordsQuantity(20)}>20</button>
                <button onClick={() => setWordsQuantity(50)}>50</button>
                <button onClick={() => setWordsQuantity(80)}>80</button>
                <button onClick={() => setWordsQuantity(100)}>100</button>
            </div>
        </section>
    );
}

const WordScreen = ({word}) => {
    console.log(word);

    return (
        <p>word</p>
    );
};

const Game = ({words, setScreen}) => {
    // states
    const [ wordsQuantity, setWordsQuantity ] = useState(0);
    const [ playing, setPlaying ] = useState(false);
    const [ currentWord, setCurrentWord ] = useState(null);

    // functions
    const sortRandomly = (a, b) => 0.5 - Math.random(); 

    const generateWords = () => {
        let wordsCopy = [...words];
        let wordsInGame = [];
        

        while (wordsInGame.length < wordsQuantity) {
            if (wordsCopy.length === 0) {
                wordsCopy = [...words]
            }

            wordsInGame.push(wordsCopy.sort(sortRandomly).pop());
        }

        return wordsInGame;
    };

    const startGame = () => {
        const wordsInGame = generateWords();

        console.log("holi");
    };

    // use effect
    useEffect(() => {

        if (wordsQuantity > 0 && !playing) {
            setPlaying(true);
            
            // start the game!
            startGame();
        }

    }, [wordsQuantity]);

    return (
        <main>
            { !playing ? 
                <GameMainMenu setWordsQuantity={setWordsQuantity} setScreen={setScreen}/> :
                <p>{wordsQuantity}</p>
            }

        </main>

    )
};

export { Game };

/*
 * TODO:

 * WordScreen -> screen where the current word playing is shown
 * besides the options menu to choose the correct article in German
 * set the current word through the useState "currentWord"
*/
