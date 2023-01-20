const Portada = () => {
    return(
        <div className='row firstRow mx-auto'>
          <div className='col-lg order-2'>
            <div className='row text-center text-light'>
             <h1>About me( )</h1>
            </div>
            <div className='row text-center'>
              <h2>Hello! My name is Facundo Furlan and I'm a developer.</h2>
            </div>
          </div>
          <div className='col-lg order-1'>
            <div className='container'>
              <div className='row d-flex justify-content-center'>
                <img src="https://drive.google.com/uc?export=view&id=1_iZ37GqLgoz6jtF2MvTxagSSWodoVpze" alt="Logo" className='imgLogo' />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Portada;