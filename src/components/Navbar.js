import React from 'react';

export default function Navbar() {
    //Send Mail button link - scrolls to Step.js component
    const scrollToBottom = () => {
        let height = document.body.scrollHeight;
        window.scroll(0 , height);
    }

    return (
        <nav className='flex justify-between items-center h-16 w-full text-cherryred-100 font-poppins flex-wrap shadow-md sticky top-0 backdrop-blur-lg'>
        <div className="logo ml-2">
            <a href='/' className='text-3xl font-extrabold'><i className='fa-solid fa-paper-plane mr-2'></i>MailPilot</a>
        </div>
        <div className="addMail mr-2">
            <button id='sendMail' className='border-cherryred-100 border-2 border-r-2 p-2 rounded-lg font-semibold shadow-md hover:text-white hover:bg-cherryred-100' onClick={scrollToBottom}><i className='fa-regular fa-plus mr-1.5'></i>Send Mail</button>
        </div>
        </nav>
    )
}
