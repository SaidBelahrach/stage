import React, { useState } from 'react';
 

 
export const Vars=React.createContext();
   
export default function Provider(props) { 
    const [save,setsave]=useState(false);
    const [deploys, setdeploys] = useState([]); 
    const [curr,setcurr]=useState(0)
    const [app, setapp] = useState("said");
    const [raison, setraison] = useState("");
    const [descri, setdescri] = useState("");  
    const [impact, setimpact] = useState(""); 
    const [isTier, setisTier] = useState(false);
    const [tier, setTier] = useState("");
    const [builder, setbuilder] = useState("");
    const [tester, settester] = useState("");
    const [implementer, setimplementer] = useState("");
    const [isEditin, setisEditin] = useState(false);
    const [edited, setedited] = useState(1111);
    const [defaults, setdefaults] = useState(["","","",""]);
    return <Vars.Provider value={ {deploys, setdeploys,save,setsave,curr,setcurr,app, setapp,
                                    raison, setraison,descri,setdescri,
                                    impact, setimpact,tester, isTier, setisTier,tier, setTier,
                                    builder,setbuilder,settester,implementer, setimplementer,
                                    isEditin, setisEditin,edited, setedited,defaults
                                }
                                }>
                {props.children}
    </Vars.Provider>
}
 
 