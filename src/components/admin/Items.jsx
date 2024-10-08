import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Items.scss";
import DetailsCard from "../corporate/DetailsCard";

function Items() {
  const location = useLocation();
  const {id, arry, ttle } = location.state || [];
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
    useEffect(() => {
        if ( typeof arry === "object") {
            setTitle("Orders")
        }
        if ( typeof arry[0] === "string" && arry[0].startsWith("http")) {
            setTitle(`Images for ${ttle}`)
        }
        if ( typeof arry[0] === "string") {
            setTitle(`Tags for ${ttle}`)
        }
    }, [])
  return (
    <div className="items">
      <button className="glow" style={{marginBottom: "1%"}} onClick={() => window.history.back()}>Back</button>
      <h1>{title}</h1>

      {arry && arry.length > 0 ? (  
          <div className="crdParent">
        {arry.map((item, index) => {
            if (typeof item === "object") {
               return (
               <>
               <DetailsCard key={index} title={item.name} image={item.image} price={item.price} desc={item.description}/>
                <div className="bottom">
                  <h2>{arry.length} items</h2>
                  {/* <div style={{display: 'flex', gap: '0.8rem'}}> */}
                <Link to={'/invoice'} state={{id: id}}>
                  <button className="glow">Generate Invoice</button>
                </Link>
                  <h2>{arry.reduce((sum, item) => sum + item.price, 0)} /-</h2>
                  {/* </div> */}
                </div>
               </>
               )
            }
            if (typeof item === "string" && item.startsWith("http")) {
                return <img className="ok" key={item._id} src={item} alt={`Image ${index}`} />
            }
            if (typeof item === "string") {
               return <input type="text" value={item} key={index} className="tag" />
            }
            if (typeof item === "string") {
              return <input type="text" value={item} key={index} className="tag" />
           }
        })}
      </div>
    ) : (
     <>
     </>   
    )}

    </div>
  );
}

export default Items;
