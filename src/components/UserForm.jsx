import React, {useState} from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName : firstName, lastName : lastName, email : email, password : password, passwordConfirm : passwordConfirm};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };

    return (
        <>
            <form onSubmit = {createUser}>
                <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} name="firstName"/>
                </div>
                <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} name="lastName"/>
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} name="email"/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password"/>
                </div>
                <div>
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" onChange={(e) => setPasswordConfirm(e.target.value)} name="passwordConfirm"/>
                </div>
                
            </form>
            <p>Your Form Data</p>
            <p>First Name   {firstName}</p>
            <p>Last Name   {lastName}</p>
            <p>Email   {email}</p>
            <p>Password   {password}</p>
            <p>Confirm Password   {passwordConfirm}</p>
        </>
    );
}

export default UserForm;