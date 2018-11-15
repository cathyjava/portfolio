import React, { Component } from 'react';

export default class Testimonials extends Component {
  
	render() {
    let resumeData = this.props.resumeData;
    
	return (
      
	<section id="testimonials">
        
		<div className="text-container">
          
		<div className="row">
            
		<div className="four columns header-col">
              
			<span><h1>Certifications</h1></span>
            
		</div>
            

		<div className="ten columns flex-container">
              
		<div className="flexslider">
                
		<ul className="slides">
                  
			{resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      	return(
                        
				<li><blockquote><h1>{item.description}</h1>

                            	<p>{item.name}</p>

                        	<cite>{item.expiration}</cite>
				</blockquote></li>
 )
 
				})

                  	}
                
		</ul>
              
		</div> {/* div.flexslider ends */}
            
		</div> {/* div.flex-container ends */}
          
	</div> {/* row ends */}
        
	</div>  {/* text-container ends */}
      
</section>
        );
  }
}
