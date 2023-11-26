import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <h1>Ooops Something Went Wrong</h1>
        <h2>{err.status}</h2>
        </>
    )
}

export default Error