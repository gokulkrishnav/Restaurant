import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
     <section className="main-card--container">
    {
        menuData.map((curElem) => {
            return (
                <>            
    <div className = "card-container" key={curElem.id}>
     <div className = "card">
       <div className = "card-body">
         <span className = "card-number card-circle subtle">
            {curElem.id}
            </span>
         <span className = "card-author subtle">{curElem.name}</span>
         <h1 className = " card-read">{curElem.name}</h1>
         <span className = "card-description subtle">
        {curElem.description}
         </span>
         <div classNmae="card-read">Read</div>
       </div>
       <img src={curElem.image} alt="images" className="card-media"/>
       <span className = "card-tag subtle">Order Now</span>
     </div>
    </div>
    </>

            );
        })}
    </section>
     </>
  );
};

export default MenuCard;