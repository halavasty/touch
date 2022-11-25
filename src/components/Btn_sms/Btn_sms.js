import "./Btn_sms.scss";


const clickSms = () => console.log ("Кнопка смс нажата");

export const Btn_sms = () => {
  return (
    <div className="Btn_sms">
      <button className="sms" onClick = {clickSms}/>
    </div>
  );
};