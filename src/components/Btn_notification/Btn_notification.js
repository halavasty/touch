import "./Btn_notification.scss";


const click = () => console.log ("Кнопка нажата");

export const Btn_notification = () => {
  return (
    <div className="Btn_notification">
      <button className="notification" onClick = {click}><div className="badge"/></button>
    </div>
  );
};