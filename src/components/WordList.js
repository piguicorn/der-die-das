import PropTypes from 'prop-types';

const WordItem = ({word, deleteWord, editWord}) => {
    return (
        <li>
            <span className="word__info">
                <p>{word.article} {word.germanword}</p>
                {
                    word.meaning !== '' ? 
                    <p>({word.meaning})</p> : null
                }
            </span>
            <span className="word__buttons">
                <button onClick={() => editWord(word)}>Edit</button>
                <button onClick={() => deleteWord(word.id)}>Delete</button>
            </span>
        </li>
    );
}

const WordList = ({setScreen, deleteWord, editWord, words}) => {
    return (
        <section className="screen">
            <div className="screen__title">
                <h2>Word list</h2>
                <button onClick={() => setScreen('home')}>X</button>
            </div>
            <div className="screen__main">
                <p><span>Total:</span> {words.length} words</p>

                <ul>
                    <li>
                        <p>article + word</p>
                        <p>(meaning)</p>
                    </li>
                    {
                        words.map(word => <WordItem word={word} key={word.id} deleteWord={deleteWord} editWord={editWord}/>)
                    }
                </ul>
                { words.length === 0 ? <p>You didn't add any word yet.</p> : null}
            </div>
        </section>
    );
};

// prop types
WordList.propTypes = {
    setScreen: PropTypes.func.isRequired,
    words: PropTypes.array.isRequired,
    deleteWord: PropTypes.func.isRequired
}

export { WordList };
