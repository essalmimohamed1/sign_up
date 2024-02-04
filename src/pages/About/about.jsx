import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

export const About = () => {
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const hello = (e) => {
        e.preventDefault();

        const [user,setuser] = useState(new users(newEmail, newPassword));

        if (user.password === newPassword && user.email === newEmail) {
            alert("Welcome");
            console.log(user.password);
            console.log(newPassword);
            console.log(user.email);
            console.log(newPassword);

        } else {
            alert("Passwords do not match or there is a validation error.");
        }
    };

    const { id } = useParams();

    

    class users {
        constructor(email, password) {
            this.email = email;
            this.password = password;
        }
    }

    return (
        <div className='bg-white h-[96vh] w-[[96vw]] justify-around flex items-center'>
            <div>
                <h1 className='text-sky-500'>logo</h1>
            </div>
            <form className="flex max-w-md flex-col gap-4 w-72">
                <div>
                    <h1 className='text-sky-500 text-center'>Sign in</h1>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput onChange={(e) => setNewEmail(e.target.value)} id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput onChange={(e) => setNewPassword(e.target.value)} id="password1" placeholder="password" type="password" required />
                </div>
                <div className='flex justify-center'>
                    <Button className='w-[20vw] bg-sky-500' onClick={(e) => hello(e)} type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};
