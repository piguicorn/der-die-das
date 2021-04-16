import { HomeMenu } from './components/HomeMenu';
import { AddWord } from './components/AddWord';
import { EditWord } from './components/EditWord';
import { WordList } from './components/WordList';
import { useState, useEffect } from 'react';

const App = () => {
    // words in localStorage
    let storedWords = JSON.parse(localStorage.getItem('derdiedas-words'));
    if (!storedWords) {
        storedWords = [];
    }

    // states
    const [ screen, setScreen ] = useState('home');
    const [ words, setWords ] = useState(storedWords);
    const [ wordToEdit, setWordToEdit ] = useState('');

    // useEffect
    useEffect(() => {
        if (words) {
            localStorage.setItem('derdiedas-words', JSON.stringify(words));
        } else {
            localStorage.setItem('derdiedas-words', JSON.stringify([]));
        }
    }, [words]);
    
    // functions
    const createWord = word => {
        setWords([
            ...words,
            word
        ]);
    };

    const deleteWord = id => {
        const newWordList = words.filter(word => word.id !== id);
        setWords(newWordList);
    };

    const editWord = word => {
        setWordToEdit(word);
        setScreen('edit');
    };

    const updateWord = word => {
        const { id } = word;
        const newWordList = words.filter(word => word.id !== id);
        setWords([
            ...newWordList,
            word
        ]);
    }

    return (
        <main>
            {
                screen === 'add' ? <AddWord setScreen={setScreen} createWord={createWord}/> 
                : screen === 'list' ? <WordList setScreen={setScreen} words={words} deleteWord={deleteWord} editWord={editWord}/> 
                : screen === 'edit' ? <EditWord setScreen={setScreen} wordToEdit={wordToEdit} updateWord={updateWord}/>
                : <HomeMenu setScreen={setScreen} /> 
            }
        </main>
    );
}

export default App;

/*
 * TODO:
 * # Game: 
 * -- Game menu
 * -- Game game
 * -- Game scores
 * # Scores
 * # CSS
 * # Alphabetically order (word list)
**/
