import PropTypes from 'prop-types';

const HomeMenu = ({setScreen}) => {
    return (
        <section>
            <h1>Home Menu</h1>
            <div>
                <button onClick={() => setScreen('play')}>Play</button>
                <button onClick={() => setScreen('add')}>Add Word</button>
                <button onClick={() => setScreen('list')}>Word List</button>
                <button>Scores</button>
            </div>
        </section>
    );
}

HomeMenu.propTypes = {
    setScreen: PropTypes.func.isRequired
}

export { HomeMenu };
