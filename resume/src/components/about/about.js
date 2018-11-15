import React, { Component } from 'react'; 
export default class About 
extends Component {
  render() {
let resumeData = this.props.resumeData;
    
	return (
      
		<section id="about">

	        <div className="row">


            <div className="three columns">


               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />


            </div>

            

		<div className="nine columns main-col">


               	     <h2>About Me</h2>
            
			<p> {
 resumeData.aboutme }
 </p>


                <div className="row">

                  
		<div className="columns contact-details">

                  
			<h2>Contact Details</h2>

	                  <p className="address">
				<span>{resumeData.name}</span>

                     <br></br>

       				<span> {resumeData.address}
 </span>

                    <br></br>
                    
				<span>{resumeData.email}</span>
		    <br></br>
				<a href={`${resumeData.website}`}><span>{resumeData.website}</span>
</a>
       		</p>

              </div>

		<div class="columns download">
                  <p>
                     <a href={`${resumeData.resumesource}`} class="button"><i class="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>

             </div>
            </div>

           </div>

          </section>
    );
  }
}
