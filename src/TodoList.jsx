export function TodoList() {

    const listItem = "Go to the gym";

    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img
            src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
            alt="Hedy Lamarr"
            className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
                <li>{listItem}</li>
            </ul>

            <Button />
            <Button text="Dont Click Me!" color ="red"/>
            <Button fontSize={20}/>
        </>
    )
}

/* export function Button(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    };

    return (
        <button style={buttonStyle}>{props.text}</button>
    );
} */

export function Button({text = "Click Me!", color = "blue", fontSize = 12}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
        <button style={buttonStyle}>{text}</button>
    );
}