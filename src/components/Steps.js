import React from 'react'

export default function Steps(props) {
    return (
        <div className='font-poppins'>
        <div className="para mt-20 font-bold text-5xl text-center">Steps to use</div>
            <div className="steps flex flex-wrap justify-center gap-y-16 lg:justify-evenly mt-16 sm:gap-x-16 sm:gap-y-10">
                <div className="step1 h-72 w-72 rounded-full border-2 flex justify-center items-center flex-col gap-y-5">
                    <div><svg className='text-7xl text-cherryred-100' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" {...props}><path d="M480 580H372a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h108v108a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V644h108a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H544V472a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z" /></svg></div>
                    <div className='w-32'><p className='text-center'>Upload file with the Email IDs (Format: .csv)*</p></div>
                </div>
                <div className="step2 h-72 w-72 rounded-full border-2 flex justify-center items-center flex-col gap-y-5">
                    <div><svg className='text-7xl text-cherryred-100' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"></path><path d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"></path></svg></div>
                    <div className='w-32'><p className='text-center'>Compose the mail to be sent to the Email IDs</p></div>
                </div>
                <div className="step3 h-72 w-72 rounded-full border-2 flex justify-center items-center flex-col gap-y-5">
                    <div><svg className='text-7xl text-cherryred-100' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                    <div className="w-32"><p className="text-center">Click send to dispatch mail to Email IDs</p></div>
                </div>
            </div>
        </div>
    )
}
