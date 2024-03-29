import { useState } from 'react';
import './section1.scss';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';


export const FirstSectionHome = () => {
    const navigate = useNavigate();

    const formatName = (name) => {
        let nameArray = name.split(" ");
        let formattedNameArray = nameArray.map(word => word[0].toUpperCase() + word.substr(1).toLowerCase());
        let formattedName = formattedNameArray.join(" ");
        formattedName = formattedName.replace(/,/g, ' ');
        return formattedName;
    }


    const hello = (e) => {
        e.preventDefault();

        // Validate and prompt for email
        const validateEmail = (inputEmail) => {
            const trimmedEmail = inputEmail.trim().toLowerCase().replace(/ /g, '');
            if (trimmedEmail.length < 10 || trimmedEmail.indexOf('@') === -1 || (trimmedEmail.split('@').length - 1 !== 1)) {
                setValidatedEmail("Enter a valid email (at least 10 characters and @).");
                return false;
            }
            setValidatedEmail("");
            return true;
        }
        // Define Password here
        let Password = password.trim();
        while (Password.length < 7 || !(/[A-Z]/.test(Password) && /[a-z]/.test(Password) && /\d/.test(Password) && /[@#\-+*/]/.test(Password))) {
            setValidatedPassword("Enter a strong password (at least 7 characters with a mix of uppercase, lowercase, numbers, and special characters).");
            return; // Stop the function if password is not valid
        }

        if (password && repeat && password === repeat && validateEmail(email)) {
            const formattedUsername = formatName(username);
            console.log(password)
            console.log(formattedUsername);
            console.log(email);
            navigate('/About/:id');
        } else {
            alert("Passwords do not match or there is a validation error.");
        }
    }

    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lasttname, setlastname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repeat, setrepeat] = useState("");
    const [validatedEmail, setValidatedEmail] = useState("");
    const [validatedPassword, setValidatedPassword] = useState(""); 

    class users {
        constructor(username, email, password, firstname, lastname , phone) {
            this.username = username
            this.email = email
            this.password = password
            this.firstname = firstname
            this.lastname = lastname
            this.phone = phone
        }
    }

    const user = new users();
    user.username = username;
    user.email = email;
    user.password = password;
    user.firstname = firstname;
    user.lastname = lasttname;
    user.phone = phone;

    return (
        <div className='flex justify-around items-center  bg-white p-5 gap-9'>
            <div>
                <h1 className='text-sky-500'>logo</h1>
            </div>
            <Card className="w-[50vw] bg-white border-0">
                <form className="flex flex-col gap-4">
                    <div className='flex justify-center'>
                        <h1 className='text-sky-500 '>Sign Up</h1>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label htmlFor="input-gray" color="gray" value="First name" />
                            </div>
                            <TextInput onChange={(e) => setfirstname(e.target.value)} id="input-gray" placeholder="first name" required color="gray" />
                        </div>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label htmlFor="input-gray" color="gray" value="Last name" />
                            </div>
                            <TextInput onChange={(e) => setlastname(e.target.value)} id="input-gray" placeholder="Last name" required color="gray" />
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Username" />
                        </div>
                        <TextInput onChange={(e) => setusername(e.target.value)} id="input-gray" placeholder="username" required color="gray" />
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label htmlFor="input-gray" color="gray" value="Phone Number" />
                            </div>
                            <TextInput onChange={(e) => setphone(e.target.value)} type='number' id="input-gray" placeholder="Phone Number" required color="gray" />
                        </div>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput onChange={(e) => setemail(e.target.value)} id="email1" type="email" placeholder="name@flowbite.com" required />
                            {validatedEmail && <p className="text-red-500">{validatedEmail}</p>}
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput onChange={(e) => setpassword(e.target.value)} id="password1" placeholder="password" type="password" required />
                            {validatedPassword && <p className="text-red-500">{validatedPassword}</p>} {/* Corrected variable name */}
                        </div>
                        <div className='w-[50vw]'>
                            <div className="mb-2 block">
                                <Label htmlFor="repeat-password" value="Repeat password" />
                            </div>
                            <TextInput onChange={(e) => setrepeat(e.target.value)} id="repeat-password" placeholder="repeat-password" type="password" required shadow />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button className='w-[20vw] bg-sky-500' onClick={(e) => hello(e)} type="submit">Submit</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};
