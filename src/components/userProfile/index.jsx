function UserProfile(props) {
    return (
        <div className="flex flex-col items-center">
            <img
                className={`rounded-full w-24 ${props.active ? 'border-solid border-4 border-green-600' : ''}`}
                src={props.image}
                alt=""
            />
            <div className="font-bold">{props.name}</div>
        </div>
    );
}

export default UserProfile;