import Header from "../../components/Header/Header";
import LatestNews from './../../components/LatestNews/LatestNews';

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* <h2>home layout</h2> */}
            <header>
            <Header></Header>
            <section className="w-9/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;