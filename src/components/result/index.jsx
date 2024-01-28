function Result(props) {
    const winnerMessages = {
        0: "It's a tie",
        1: "Player 1 is winner",
        2: "Player 2 is winner",
    };

    return <div className="flex items-center justify-center font-bold text-3xl text-green-600">
        {winnerMessages[props.value]}
    </div>
}

export default Result