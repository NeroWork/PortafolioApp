const SingleProject = ({title, homeLink, labLink, definition, imgHomeLink}) => {
    return(
        <>
            <div className="row d-flex">
                <div className="col col-project">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm d-flex my-2 p-0 align-items-center justify-content-center">
                                <h3 className="title3">{title}</h3>
                            </div>
                            <div className="col-sm d-flex my-2 p-0 align-items-center justify-content-center">
                                <a target={"_blank"} href={homeLink}><img className="logoProject" src={imgHomeLink} alt="page logo" /></a>
                            </div>
                            <div className="col-sm d-flex my-2 p-0 align-items-center justify-content-center">
                                <a target={"_blank"} href={labLink}><img className="logoProject" src="http://drive.google.com/uc?export=view&id=1GvrbcejQIfRRfK51SGHZoEf_ia6z1Cwm" alt="gitlab logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <p className="projectDescription">
                {definition}
                </p>
            </div>
        </>

    )
}

export default SingleProject;