import React from 'react';
import CardCss from './Card.module.css';

function Card(props) {
   return (
      
      <>
         <div className={CardCss.main}>
            <div className={CardCss.imageDiv}>
               <img src={props.imgsrc} alt='' />
            </div>
            <div className={CardCss.headingDiv}>
               <h1 className={CardCss.heading}>{props.Heading}</h1>

               <p className={CardCss.para}>
                  {props.description1}
                  {props.description2}
               </p>
            </div>
            <div className={CardCss.btn}>
            <div className={CardCss.btns}>
             
                <a href={props.Linkview}>View</a>
              
            </div>
            <div className={CardCss.btns}>
            <a href={props.Linksource}>Source</a>
              
            </div>
            </div>
            
           
         </div>
      </>
   );
}

export default Card;