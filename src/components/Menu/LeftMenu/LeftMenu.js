import "./LeftMenu.css";

export const LeftMenu = () => {
  return (
    <div className="LeftMenu">
      <div className="Conteiner">
        <div className="Logo"></div>
        <div className="TextLogo">Teach.</div>
        <div className="Avatar"></div>
        <div className="TextAvatar">Jone Cooper</div>
        <div className="Line"></div>
        <div className="DashboardConteiner">
        <div className="DashboardLogo"></div>
        <div className="DashboardText">Dashboard</div>
        </div>
        <div className="ChatConteiner">
        <div className="ChatLogo"></div>
        <div className="ChatText">Chat</div>
        </div >
        <div className="MyCourseConteiner">
        <div className="MyCourseLogo"></div>
        <div className="MyCourseText">My Course</div></div>
        <div className="MyAccountConteiner">
            <div className="MyAccountLogo"></div>
            <div className="MyAccountText">My Account</div>
        </div>
        <div className="LogoutConteiner">
            <div className="LogoutLogo"></div>
            <button className="LogoutButton">Logout</button>
        </div>

      </div>
    </div>
  );
};
