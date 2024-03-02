import React from 'react'
import YourName from '../Components/SendMessage/YourName'
import Phone from '../Components/SendMessage/Phone'
import YourEmail from '../Components/SendMessage/YourEmail'
import Message from '../Components/SendMessage/Message'
import SubmitButton from '../Components/SendMessage/SubmitButton'

const Form = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cbe8af2e-d79f-4cc9-8640-74bcb085c285");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div>
        <form onSubmit={onSubmit}>
        <YourName/>
        <Phone/>
        <YourEmail/>
        <Message/>
        <SubmitButton/>
    </form>
    <span>{result}</span>
    </div>
    
  )
}

export default Form