/* eslint-disable no-useless-escape */
import { useState } from "react";
import { Button } from "../../../../../components";
import { ContactFormSuccessModal } from "../contactFormSuccessModal";
import { ContactInputComponent } from "../contactInputComponent";
import userServices from '../../../../../services/userServices'
import { useMutation } from "react-query";

type ContactResponseType = {
    status: string;
}

export const ContactUsForm = () => {
const [modal, setModal] = useState(false)
const [error, setError] = useState<null | string>(null)
const [userData, setUserData] = useState({
  fullName: '',
  email: '',
  message: '',
})

const emailValidation = () => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(regex.test(userData.email) === false){
      setError("Email is not valid");
      return false;
  }
  return true;
}

const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setUserData({...userData, [e.target.name]: e.target.value})

const {mutate, isLoading } = useMutation(userServices.contact, {
    onSuccess: (data) => {
      const responseData = data as ContactResponseType
      if (responseData?.status === 'received') {
        setModal(true)
        setUserData({
         ...userData,
         fullName: '',
         email: '',
         message: ''
        })
        setError(null)
      }
    },
})

const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
  e.preventDefault()
  if(emailValidation()) {
     mutate(userData)
  }
}

  return (
    <div className="basis-6/2 ">
      <div className="mb-[10px] md:mb-[32px]">
        <h3 className="hidden md:flex text-[2.37rem] font-bold text-[#424245] font-productSans #19275E mb-[16px]"> Drop a message</h3>
        <p className="text-[#19275E] text-[1.12rem]">We are always glad to hear from you.</p>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <ContactInputComponent
          type='text'
          id='name'
          name="fullName"
          onChange={onChange}
          label='Name'
          value={userData.fullName}
          placeholder="Your name"
          errorText="Enter a name"
        />
        <ContactInputComponent
          type='email'
          id="email"
          onChange={onChange}
          name="email"
          label="Email"
          value={userData.email}
          inputInvalid={() => emailValidation()}
          placeholder="Your Email"
          errorText={error}
        />
        <div>
          <label
            htmlFor="message"
            className="mb-2 p-0 text-lg font-medium text-[#424245]"
          >
            Drop a message
          </label>
          <textarea
            rows={10}
            id="message"
            name="message"
            value={userData.message}
            onChange={onChange}
            placeholder="Hello..."
            maxLength={100}
            className={` w-full border bg-transparent rounded-lg p-3 outline-none mt-2.5 placeholder:text-slate-400 placeholder:text-base placeholder:font-medium
               border-gray-400 focus:border-blue-500
            `}
          />
          <p className="text-[#B1B1B1] font-bold text-gray-800">
            Maximum of 100 words
          </p>
        </div>
        <Button
          type="submit"
          className="w-full text-xl font-bold py-3.5 mt-[1.5rem] mb-9 text-white bg-[#0D142E] rounded-lg"
        >
          {isLoading ? 'Loading...' : 'Send message'}
        </Button>
      </form>
      {modal && <ContactFormSuccessModal modal={modal} setModal={setModal}/>}
    </div>
  );
};

