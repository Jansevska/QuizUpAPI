

import UserType from "../types/auth";

type HomeProps = {
    loggedInUser: Partial<UserType>|null
}

export default function Home({loggedInUser}: HomeProps) {

    return (
        <>
        { loggedInUser && <h1>Hello {loggedInUser.username}</h1> }
        </>
    );
}
