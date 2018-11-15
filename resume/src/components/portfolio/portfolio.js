import React, { Component } from 'react';

export default class Porfolio extends Component {
  
	render() {
    let resumeData = this.props.resumeData;
    
	return (
      
		<section id="portfolio">
      
		<div className="row">
        
		<div className="twelve columns collapsed">
          
			<h1>Check Out Some of My Work</h1>
          

		<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          			{resumeData.portfolio && resumeData.portfolio.map((item)=>{
              				return(
                
			<div className="columns portfolio-item">
                  
			<div className="item-wrap">
                    
				<a href={`${item.imghref}`}>
                      
				<img alt="" src={`${item.imgurl}`} className="item-img"/>
                      		<div className="overlay">
                        
			<div className="portfolio-item-meta">
                          
				<h5>{item.name}</h5>
                          
				<p>{item.description}</p>

			

		<div className="link-icon"><i className="icon-plus"/>


	<div id={`${item.imgid}`} className="popup-modal mfp-hide">
	  <img className="scale-with-grid" src={`${item.imgurlm}`} alt />
 	       <div className="description-box">
    	       	    <h4>{item.name}</h4>
            	    <p>{item.summary}</p>
           	    <span className="categories"><i className="fa fa-tag" />
		    <em className="info">{item.category}</em></span>
          	</div>
  		
		<div className="link-box">
    			<a href={`${item.imgsource}`}>Details</a>
   			<a className="popup-modal-dismiss">Close</a>
		</div>
		</div>
                  </div>
		</div>
		</div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}