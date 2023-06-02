import Navbar from "../Navbar";

const MainLayout = ({children}) => {
    return(
        <div className="flex flex-col min-h-s">
            <main>
                <Navbar />
                {children}
            </main>
        </div>
    )
};

export default MainLayout;