import { MdOutlineEmail } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiMobileVibration } from 'react-icons/bi'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
init('user_id');

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    console.log('email', emailSent)
    
    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_cu9jkq1';
            const templateId = 'template_45r756p';
            const userId = '7bWjuFRE_54XXqk7F';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <div className=''>
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h1 
                        className="before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block text-6xl font-bold my-16">
                            Contact Me
                    </h1>
                </div>
                    {/* contact details */}
                    <div className="flex mx-8 md:mx-34 lg:flex-rows lg:mx-40">
                        <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                            
                            <div className='w-14 h-14 flex items-end justify-center mt-2 mb-4 lg:mb-0 text-3xl'>
                                <HiOutlineLocationMarker />
                            </div>
                            <div className='flex flex-col items-start space-y-3'>
                                <h4 className='text-[20px] font-bold'>Location</h4>
                                <p>Melbourne, Victora</p>
                            </div>
                            <div className='w-14 h-14 flex items-end justify-center mt-2 mb-1 lg:mb-0 text-3xl'>
                                <MdOutlineEmail />
                            </div>
                            <div className='flex flex-col items-start space-y-3'>
                                <h4 className='text-[20px] font-bold'>Reach out!</h4>
                                <p>jack.f.dyball@gmail.com</p>
                            </div>
                            
                            <div className='w-14 h-14 flex items-end justify-center mt-2 mb-4 lg:mb-0 text-3xl'>
                                <BiMobileVibration />
                            </div>
                            <div className='flex flex-col items-start space-y-3'>
                                <h4 className='text-[20px] font-bold'>Contact Number</h4>
                                <p>+61 476892821</p>
                            </div>
                        </div>
                        {/* contact form */}
                        <div className='mt-8 ml-20 2xl:ml-36 space-y-8 w-full max-w-[780px]'>
                        {/* <form className='space-y-8 w-full max-w-[780px]'> */}
                            <div className='flex gap-8'>
                                <input className='input border text-sm rounded-lg block w-full p-2.5' value={name} onChange={e => setName(e.target.value)} type="text" placeholder='First name'/>
                            </div>
                            <div className='flex flex-col space-y-8'>
                                <input className='input border text-sm rounded-lg block w-full p-2.5'value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Your email' />
                            </div>
                        
                            <textarea className='flex border text-sm rounded-lg block w-full p-2.5' cols="30" rows="10" value={message} onChange={e => setMessage(e.target.value)} placeholder='Your message'></textarea>
                            <div className='flex'>
                                <button className='border text-sm rounded-lg block w-full p-2.5' onClick={submit}>Send</button>
                            </div>
                            <div>
                                <span className={emailSent ? 'visible' : 'hidden'}>Thank you for reaching out!</span>
                            </div>
                        {/* </form> */}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contact