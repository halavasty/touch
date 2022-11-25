import "./Home.scss";
import { LeftMenu } from "../../components/LeftMenu/LeftMenu";
import {Dropdown_person} from "../../components/Dropdown_person"

export const Home = () => {
  return (
    
    <div className="Home">
    <LeftMenu />
    <Dropdown_person />
    

    </div>
  );
};
