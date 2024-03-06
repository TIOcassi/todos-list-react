import { Pushbutton, Button } from "./styled";

const Buttons = ({ tasks, hideDone, togglehideDone, setAllDone }) => (

    tasks.length > 0 && (


        <Pushbutton>
            <Button onClick={togglehideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Pushbutton>
    )
);

export default Buttons;