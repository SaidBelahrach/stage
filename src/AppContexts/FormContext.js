import React, { useState } from "react";

export const Store = React.createContext();

export default function Provider(props) {
  // const [deploys, setdeploys] = useState([]); //array of deployements
  // const [app, setapp] = useState("said");
  // const [raison, setraison] = useState("");
  // const [descri, setdescri] = useState("");
  // const [impact, setimpact] = useState("");
  // const [isTier, setisTier] = useState(false); //if there a 'tier' or not
  // const [tier, setTier] = useState(""); //nom de tier
  // const [demander, setdemander] = useState("demandeur de changement"); //demander fullname
  // const [builder, setbuilder] = useState(""); //builer fullname
  // const [tester, settester] = useState(""); //tester fullname
  // const [implementer, setimplementer] = useState(""); //implementer fullname
  // const [isEditin, setisEditin] = useState(false); //tell the form whether to save new depl or save edit
  // const [edited, setedited] = useState(); //the index of edited element
  // const [defaults, setdefaults] = useState(["", "", "", ""]); //default values of CustomSelect (used when editing itm)
  
  const [vars,setvars]=useState({ deploys:[], 
                                  app:"", 
                                  raison:"", 
                                  descri:"", 
                                  impact:"", 
                                  isTier:"",  
                                  tier:"", 
                                  demander:"", 
                                  builder:"", 
                                  tester:"", 
                                  implementer:"",
                                  isEditin:"", 
                                  edited:"",  
                                });
  return (
    <Store.Provider
      value={{vars,setvars}}
    >
      {props.children}
    </Store.Provider>
  );
}
