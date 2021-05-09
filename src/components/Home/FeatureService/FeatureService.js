import React from 'react';
import features from '../../../images/features.png'
const FeatureService = () => {
    return (
      <section>
          <div className= "container">
          <div className = "row">
              <div className = "col-md-5 mt-5">
              <img style= {{height: '500px'}} src={features} alt="" className="img-fluid"/>
              </div>
              <div className= "col-md-7 align-self-center">
                <h1 style = {{color: '#3A4256'}}>Exceptional Dental <br></br> Care, On Your Terms</h1>
                <p className= "text-secondary" style = {{lineHeight:'1.7'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis vitae aspernatur ex quae? Porro deserunt aspernatur laborum, pariatur doloremque laudantium ex 
                    beatae reprehenderit rerum quam in illum amet deleniti et placeat 
                    nobis ipsa iusto tempore cumque aut ipsam perferendis harum quaerat ea.
                    Rerum aspernatur eum nesciunt sint dolore laboriosam reiciendis.</p>
                <button style = {{backgroundColor: '#1CC7C1'}} className="btn text-white">Learn More</button>
              </div>
          </div>
          </div>
          
      </section>
    );
};

export default FeatureService;