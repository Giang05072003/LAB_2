function Square(props) {
    const imgSrc = props.value === 'X' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/1200px-Red_x.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/2048px-Blue_circle_for_diabetes.svg.png'

    return (
        <button
            className={`rounded w-24 h-24 border-solid border-8 border-black text-9xl text-center ${props.value === 'X' ? 'text-red-600' : 'text-blue-600'}`}
            onClick={props.onSquareClick}
        >
            {props.value !== null && (
                <img src={imgSrc} alt="" />
            )}
        </button>
    );
}

export default Square