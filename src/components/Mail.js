import React from 'react';
import { useState} from 'react';
import Popup from 'reactjs-popup';

export default function Select(props) {
    //Name of selected csv file
    const [fileName, setFileName] = useState("");

    //Change handler after file is selected
    const handleChange = (event) => {
        try {
            setFileName(event.target.files[0].name);
            document.querySelector('.selected-file').classList.toggle('hidden');
            document.querySelector('.label-input').classList.toggle('hidden');
            document.querySelector('.validate').classList.toggle('hidden');
        } catch(e) {
            console.log(e);
        }
    }

    //Deselecting the file if suppose wrong file selected
    const resetFile = () => {
        window.location.reload(true);
    }

    //Email IDs validation
    let upload = document.getElementById('select-file');
    Window.valNo = 0;
    let invalNo = 0;
    Window.valMail = [];

    const validateMails = () => {
        let fr = new FileReader();
        fr.readAsText(upload.files[0]);
        fr.onload = () => {
            let arr = fr.result.split(/\r?\n|\n/).map(e => {
                return e.split(',');
            });
            arr.forEach(e => {
                let em = String(e);
                let m = e.map(e => {
                    return `<td>${e}</td>`;
                });
                let creEle = document.createElement('tr');
                creEle.innerHTML = m;
                if (em!=="") {
                    if(em.charAt(em.length - 4) === '.') {
                        document.querySelector('table#val').appendChild(creEle);
                        Window.valMail.push(em);
                        Window.valNo = Window.valNo + 1;
                        return false;
                    }
                    else if (em.charAt(em.length - 3) === '.') {
                        document.querySelector('table#val').appendChild(creEle);
                        Window.valMail.push(em);
                        Window.valNo = Window.valNo + 1;
                        return false;
                    }
                    else {
                        document.querySelector('table#inval').appendChild(creEle);
                        invalNo = invalNo + 1;
                        return false;
                    }
                }
            });
            document.querySelector('#valCount').innerHTML = Window.valNo;
            document.querySelector('#invalCount').innerHTML = invalNo; 
            document.querySelector('.validation').classList.toggle('hidden');
            document.querySelector('.validate').classList.toggle('hidden');
            document.querySelector('.send-mail').classList.toggle('hidden');
        }
    }

    //Sending mails through SMTP JS
    const sendMail = (event) => {
        event.preventDefault();
        if(window.Email) {
            window.Email.send({
                SecureToken: props.secureToken,
                To: Window.valMail,
                From: props.sender,
                Subject: document.getElementById('subject').value,
                Body: document.getElementById('body').value
            }).then(
                alert(Window.valNo + " mails sent successfully")
            )
        }
    }
    

    return (
        // Select File Component 
        <div className='border-2 mx-3 lg:mx-auto lg:my-20 font-poppins flex flex-col items-center mt-16 lg:w-[900px] p-7 rounded-lg bg-white'>
            <h1 className='text-5xl'>Select File</h1>
            <p className='mt-10 text-gray-500 text-center lg:w-[700px]'>Select the file consisting of all the email IDs to which the mail has to be sent. MailPilot will automatically detect and filter the valid and invalid email IDs.<br/> (Required file format : .csv)*</p>
            
            {/* Choose csv file input */}
            <div className="choose mt-10">
                <form id='csv-form'><input type="file" id='select-file' accept='text/csv' className='hidden' onChange={handleChange}/></form>
                <div className='label-input'><label htmlFor="select-file" className='bg-cherryred-100 shadow-xl shadow-gray-500/50 text-xl w-60 h-16 rounded-lg flex items-center justify-center text-white cursor-pointer active:bg-hoverblack-100 lg:hover:bg-hoverblack-100 lg:active:bg-cherryred-100'><svg className='mr-2' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" {...props}><path d="M480 580H372a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h108v108a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V644h108a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H544V472a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v108zm374.6-291.3c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z" /></svg>CHOOSE FILE</label></div>
                
                {/* Shows selected filename */}
                <div className="selected-file hidden">
                    <div className="fileName text-gray-500 mt-5 flex justify-between items-center w-56 border-2 p-3 rounded-lg">
                        <div><i className='fa-solid fa-file-csv mr-2'></i>{fileName}</div>
                        <button onClick={resetFile}><i className='fa-solid fa-x text-cherryred-100'></i></button>
                    </div>
                </div>

                {/* Validate Button */}
                <div className="validate mt-14 hidden">
                        <button className='bg-cherryred-100 shadow-xl shadow-gray-500/50 text-xl w-60 h-16 rounded-lg flex items-center justify-center text-white cursor-pointer active:bg-hoverblack-100 lg:hover:bg-hoverblack-100 lg:active:bg-cherryred-100' onClick={validateMails}>VALIDATE<i className='fa-solid fa-arrow-right ml-2'></i></button>
                </div>

                {/* Send Mail Popup Box  */}
                <div className="send-mail mt-14 hidden">
                    <Popup trigger={<button className='bg-cherryred-100 shadow-xl shadow-gray-500/50 text-xl w-60 h-16 rounded-lg flex items-center justify-center text-white cursor-pointer active:bg-hoverblack-100 lg:hover:bg-hoverblack-100 lg:active:bg-cherryred-100'><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='mr-2'><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>SEND MAIL</button>} modal nested>
                        {
                            close=> (
                                <div className='border-2 mx-3 lg:mx-auto lg:my-20 font-poppins mt-16 lg:w-[700px] p-7 rounded-lg bg-white '>
                                    <div className='flex justify-end mb-5'>
                                        <button onClick={() => close()}><i className='fa-solid fa-xmark text-2xl text-cherryred-100'></i></button>
                                    </div>
                                    <div className='flex justify-center'>
                                        <form onSubmit={sendMail} action='/' id='mailForm' className='flex flex-col justify-center gap-y-5'>
                                            <h1 className='text-4xl'>Compose Mail</h1>
                                            <input className='border-2 border-gray-500 rounded-lg w-64 m-auto p-2 text-sm mt-10' placeholder='Subject' name='subject' id='subject' type="text" />
                                            <textarea className='border-2 border-gray-500 rounded-lg w-64 m-auto p-2 text-sm' placeholder='Body' name="body" id="body" cols={30} rows={7}></textarea>
                                            <button id='submit' type='submit' className='bg-cherryred-100 border-2 border-cherryred-100 text-white rounded-lg w-28 m-auto p-2 shadow-lg hover:bg-white hover:text-cherryred-100 hover:border-cherryred-100'>Send<i className='fa-solid fa-paper-plane ml-2'></i></button>
                                        </form>
                                    </div>
                                </div>   
                            )
                        }
                    </Popup>
                </div>
            </div>

            {/* Valid and Invalid Email IDs check */}
            <div className='validation hidden'>
                <div className="tables flex justify-evenly w-full mt-16 flex-wrap text-center sm:gap-x-20 gap-y-5 sm:text-left lg:text-left">
                    <div className="valTab">
                        <table id="val">
                            <tr>
                                <td>
                                    <h2 className='font-bold text-lg'>Valid Emails: <span id="valCount" className='text-cherryred-100 text-lg font-bold'></span></h2>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="invalTab">
                        <table id="inval">
                            <tr>
                                <td>
                                    <h2 className='font-bold text-lg'>Invalid Emails: <span id="invalCount" className='text-cherryred-100 text-lg font-bold'></span></h2>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
