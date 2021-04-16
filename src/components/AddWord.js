import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const AddWord = ({setScreen, createWord}) => {
    // states
    const [ word, setWord ] = useState({
        article: '',
        germanword: '',
        meaning: ''
    });

    const [ missingArticle, setMissingArticle ] = useState(false);
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

        // validating
        setMissingArticle(false);
        setMissingGermanWord(false);

        if (article.trim() === '') {
            setMissingArticle(true);
        }        

        if (germanword.trim() === '') {
            setMissingGermanWord(true);
        }

        if (missingArticle || missingGermanWord) {
            return ;
        }

        // assign id
        word.id = uuidv4();

        // create word
        createWord(word);

        // restore form
        setWord({
            article: '',
            germanword: '',
            meaning: ''
        });
    };


    return (
        <section className="screen">
            <div className="screen__title">
                <h2>Add Word</h2>
                <button onClick={() => setScreen('home')}>X</button>
            </div>
            <div className="screen__main">
                <form onSubmit={handleSubmit}>
                    <p>Article:</p>
                    { missingArticle ? <p>You need to choose an article.</p> : null }
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
                <button onClick={() => setScreen('home')}>Cancel</button>
            </div>
        </section>
    );
}

// prop types
AddWord.propTypes = {
    setScreen: PropTypes.func.isRequired,
    createWord: PropTypes.func.isRequired
}

export { AddWord }
