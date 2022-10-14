import { useCallback } from 'react';
import { render } from 'react-dom';
import { Post } from '~/utils/HttpRequest';
import useServices from '../DefaultServices';
const API = '/api/email';



export default function MailerServices(location) {
  const services = useServices(location);
  const send = useCallback(({
    subject,content,user
  }, onThen,onCatch) => {

    let name = (user.FirstName || "") +" "+ (user.LastName || "");
    const div = document.createElement("div");
    render(content,div);
    return services.getServices({
      api: API, 
      method:Post,
      params: {
        toEmail:user.Email,
        toName:name,
        fromName:process.env.REACT_APP_WEBSITE_NAME,
        subject:subject,
        body:div.innerHTML
    },
      onThen:()=>{
        onThen && onThen();
      },
      onCatch: (e) => {
        onCatch && onCatch(e);
      },location
    });
  }, []);
  return { send };
}

