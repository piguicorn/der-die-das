import  { useState } from 'react';
import PropTypes from 'prop-types';

const EditWord = ({setScreen, wordToEdit, updateWord}) => {
    // states
    const [ word, setWord ] = useState(wordToEdit);
    const [ missingGermanWord, setMissingGermanWord ] = useState(false);

    // getting values
    const { article, germanword, meaning } = word;

    // handlers
    const handleChange = (e) => {
        setWord({
            ...word,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (germanword.trim() === '') {
            setMissingGermanWord(true);
            return ;
        }
        
        // update word
        updateWord(word);
    }


    return (
        <section className="screen">
            <div className="screen__title">
                <h2>Edit Word</h2>
                <button onClick={() => setScreen('list')}>X</button>
            </div>
            <div className="screen__main">
                <form onSubmit={handleSubmit}>
                    <p>Article:</p>
                    <ul>
                        <li>
                            <input
                                type="radio"
                                name="article"
                                value="der"
                                checked={article === 'der' ? true : false}
                                id="der"
                                onChange={handleChange}
                            />
                            <label htmlFor="der">Der</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="article"
                                value="die"
                                checked={article === 'die' ? true : false}
                                id="die"
                                onChange={handleChange}
                            />
                            <label htmlFor="die">Die</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="article"
                                value="das"
                                checked={article === 'das' ? true : false}
                                id="das"
                                onChange={handleChange}
                            />
                            <label htmlFor="das">Das</label>
                        </li>
                    </ul>
                    <label htmlFor="germanword">Word (in German):</label>
                    { missingGermanWord ? <p>You need to introduce a word in German.</p> : null }
                    <input type="text" name="germanword" id="germanword" value={germanword} onChange={handleChange}/>
                    <label htmlFor="meaning">Meaning (optional):</label>
                    <input type="text" name="meaning" id="meaning" value={meaning} onChange={handleChange}/>
                    <button type="submit">Add</button>
                </form>
                <button onClick={() => setScreen('list')}>Cancel</button>
            </div>
        </section>
    );
};

// prop types
EditWord.propTypes = {
    setScreen: PropTypes.func.isRequired,
    wordToEdit: PropTypes.object.isRequired,
    updateWord: PropTypes.func.isRequired
}

export { EditWord };
