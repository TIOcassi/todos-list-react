import "./style.css";

const Buttons = ({ tasks, hideDone, togglehideDone }) => (

    tasks.length > 0 && (


        <div className="buttons">
            <button onClick={togglehideDone} className="buttons__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;