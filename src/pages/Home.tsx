import Greeting from "@/components/home/Greeting";
import Notes from "@/components/home/Notes";
import SearchBar from "@/components/home/SearchBar";

const Home = () => {
    return (
        <div>
            <SearchBar />
            <Greeting />
            <Notes />
        </div>
    );
};

export default Home;
