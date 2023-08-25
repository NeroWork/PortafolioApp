const KnowledgeChart = () => {
    return(
        <div className='row thirdRow mx-auto'>
          <div className='container'>
            <div className='row title1 text-center'>
              <h2>
              I have learned a large number of tools in my personal projects, you can see them here along with the number of years I have worked with them
              </h2>
            </div>
            <div className='row'>
              <div className='container'>
                <div className='row text-center rowH3'>
                  <h3>Main knowledge</h3>
                </div>
                <div className='row'>
                  <div className='col-sm align-items-center columCuadro text-center'>
                    <p>Software developer</p>
                    <p>Fullstack developer</p>
                    <p>Git/3</p>
                  </div>
                  <div className='col-sm columCuadro text-center'>
                    <p>C++/3</p>
                    <p>JavaScript/1</p>
                    <p>HTML/2</p>
                  </div>
                  <div className='col-md columCuadro text-center'>
                    <p>CSS/2</p>
                    <p>React/1</p>
                    <p>Node.js/1</p>
                  </div>
                  <div className='col-md columCuadro text-center'>
                    <p>MongoDB/1</p>
                    <p>Express/1</p>
                    <p>Passport/1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='container'>
                <div className='row text-center rowH3'>
                <h3>Other Useful Tools</h3>
                </div>
                <div className='row'>
                  <div className='col-sm columCuadro text-center'>
                    <p>Spanish/Native</p>
                    <p>English/Advanced</p>
                    <p>Italian/Basic</p>
                  </div>
                  <div className='col-sm columCuadro text-center'>
                    <p>Photoshop</p>
                    <p>UX/UI design</p>
                    <p>Detail-oriented</p>
                  </div>
                  <div className='col-md columCuadro text-center'>
                    <p>Proactive</p>
                    <p>Fast learner</p>
                    <p>Abstract reasoning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default KnowledgeChart;