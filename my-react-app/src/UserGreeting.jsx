function UserGreeting(props) {
    return (
        props.isLoggedin ? (
            <h1>Welcome back, {props.username}!</h1>
        ) : (
            <h2>Please sign up.</h2>
        )
    );
}

export default UserGreeting;