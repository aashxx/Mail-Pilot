import React from 'react'

export default function Home(props) {
  return (
    <div className='w-full mt-10 lg:mt-16 font-poppins'>
        <div className='flex flex-wrap justify-evenly items-center'>
            <div className="desc m-3 sm:w-9/12 lg:w-[500px]">
                <h1 className='text-5xl sm:text-7xl font-bold text-cherryred-100'>Write Once,</h1>
                <h2 className='text-4xl sm:text-5xl font-bold'>Deliver to All!</h2>
                <p className='mt-7 text-gray-500'>MailPilot is an automated tool that enables users to send large volumes of emails simultaneously, streamlining communication and reaching a wide audience effortlessly.</p>
            </div>
            <div className="images w-96 mt-7 sm:w-9/12 lg:w-[500px]">
                <img className='rounded-lg' src="https://img.freepik.com/premium-photo/sending-email-bulk-mail-hand-touch-white-tablet-with-digital-hologram-email-sms-sign-city-dark-blurred-background-business-email-concept_486333-4453.jpg?w=996" alt="MailPilot" />
            </div>
        </div>
    </div>
  )
}
