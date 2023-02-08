import Important from "../../components/important/Important";
import MainFSlider from "../../components/mainFSlider/MainFSlider";
import MainImgCard from "../../components/mainImgCard/MainImgCard";
import NewCollection from "../../components/newCollection/NewCollection";
import TeamSlider from "../../components/teamSlider/TeamSlider";
import "./home.css";

function Home() {
    return (
        <div className="m-home">
            <div className="m-f-home">
                <MainFSlider />
                <MainImgCard />
            </div>
                <NewCollection />
                <Important />
                <TeamSlider />
        </div>
    )
}

export default Home