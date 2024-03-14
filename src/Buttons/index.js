import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, togglehideDone, setAllDone }) => (

    tasks.length > 0 && (
        <StyledButtons>
            <Button onClick={togglehideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    )
);

export default Buttons;