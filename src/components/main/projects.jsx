import SingleProject from "../projects/singleProject";

const Proyects = () => {
    let definitionText1 = "This project was done to practice dynamic rendering techniques based on the state of the database, with ReactJS. The website simulates a sales page for a local bakery.";
    let definitionText2 = "This is a simple project in which I use ReactJS and Bootstrap to create a portfolio where anyone can see me and my projects";
    let definitionText3 = "This is where I learned all the basics of non relational data bases, in this case MongoDB; and how to work with Express js. It's not meant to be pretty and it's not, but it helped me learn how to create a functional back end";

    return(
        <div className="row forthRow text-center">
            <div className="container">
                <div className="row">
                    <h2 className="title2">
                        Talking about my proyects, here you can see some of them!
                    </h2>
                </div>
                <SingleProject title="Kokebok" homeLink="https://nerowork.github.io/kokebok-react/" labLink="https://gitlab.com/NeroWork/kokebok-react" definition={definitionText1} imgHomeLink="http://drive.google.com/uc?export=view&id=1UUa5glywvUBxuSUMHXJDdciOxv2-jAK2"></SingleProject>
                <SingleProject title="Portfolio" homeLink="https://nerowork.github.io/PortafolioApp/" labLink="https://gitlab.com/NeroWork/PortafolioApp" definition={definitionText2} imgHomeLink="https://drive.google.com/uc?export=view&id=1_iZ37GqLgoz6jtF2MvTxagSSWodoVpze"></SingleProject>
                <SingleProject title="Backend" homeLink="https://backend-16d8.onrender.com/session/render" labLink="https://gitlab.com/NeroWork/BACKEND-DEPLOY" definition={definitionText3} imgHomeLink="https://drive.google.com/uc?export=view&id=1213zeUJ4qi3B_xfnNFARoZlqxKRTTHRr"></SingleProject>
            </div>
        </div>
    )
}

export default Proyects;