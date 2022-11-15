import "./Home.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { LeftMenu } from "../../components/Menu/LeftMenu";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Menu />
      <LeftMenu />
    </div>
  );
};
