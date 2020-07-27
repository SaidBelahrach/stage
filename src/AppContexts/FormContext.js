import React, { useState } from "react";

export const Store = React.createContext();

export default function Provider(props) { 
  const [vars,setvars]=useState({ deploys:[{N_ref:123,app:'oncf.ma',date:"11/11/2020",status:"Nouveau"},
                                           {N_ref:123,app:'Offres',date:"11/11/2020",status:"En attente"},
                                           {N_ref:123,app:'Clients',date:"11/11/2020",status:"Rejeter CM/CAB"},
                                           {N_ref:123,app:'Factures',date:"12/12/2020",status:"Test"}   
                                          ], 
                                  app:"", 
                                  raison:"", 
                                  descri:"", 
                                  impact:"", 
                                  isTier:false,  
                                  tier:"", 
                                  demander:"", 
                                  builder:"", 
                                  tester:"", 
                                  implementer:"",
                                  isEditin:false, 
                                  edited:"",  
                                  selected:'/'
                                });
  return (
    <Store.Provider
      value={{vars,setvars}}
    >
      {props.children}
    </Store.Provider>
  );
}
