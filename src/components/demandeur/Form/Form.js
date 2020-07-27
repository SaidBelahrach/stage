import React, { useContext, useEffect } from "react";
import "./Form.css";
import CustomSelect from "./CustomSelect"; 
import {Store } from "../../../AppContexts/FormContext"; 
import { useHistory } from "react-router";

export default function Form(props) { 
  const apps = ["Offres", "Payements", "Client Space", "oncf.ma"];
  const history=useHistory();
  const {vars,setvars } = useContext(Store);
  const{deploys, 
        app, 
        raison, 
        descri, 
        impact, 
        isTier,  
        tier, 
        demander, 
        builder, 
        tester, 
        implementer,
        isEditin, 
        edited
      }=vars; 

  function validate(e) {
      e.preventDefault(); //to remove later, i used it just for tests 
      if (!isEditin) {  //creating new deployement
            var date = new Date().toLocaleDateString(); 
            if (localStorage.getItem("N_ref") == null)
            localStorage.setItem("N_ref", 0); //just for testing
            var N_ref = localStorage.getItem("N_ref");
            N_ref++;
            var status = "Nouveau"; 
            localStorage.setItem("N_ref", N_ref); 
            setvars({...vars,demander:"demandeur de changement"}); //current user
            let dep = {N_ref,status,date,app,raison,descri,impact,
                      tier,demander,builder,tester,implementer
                      };
            let cp = deploys;
            cp.push(dep); cp.push(dep); cp.push(dep); cp.push(dep); cp.push(dep);
            setvars({...vars,deploys:cp});
      } else { //editing an existing deployment
            let dep = deploys[edited];
            let N_ref = deploys[edited].N_ref;
            let date = deploys[edited].date;
            let status = deploys[edited].status;

            dep = {N_ref,status,date,app,raison,descri,impact,
              tier,demander,builder,tester,implementer
            };
            deploys[edited] = dep; 
            setvars({...vars,isEditin:false}); 
      }  
      history.push('/') 
  } 

  return (
    <div className="sign">
      <h3 className="text-center">New Deployment</h3>
      <p className="err">{}</p>
      <form name="f1" onSubmit={validate}>
        <div className="row">
              <div>
                  <p>Système ou CI objet du changement:</p>
                  <CustomSelect data={apps} default={"defaults[0]"} vars={vars} setvars={setvars} /> 
              </div>
              <div className="after-absolute">
                  <p>Raison du changement</p>
                  <input
                        type="text"
                        required
                        value={raison}
                        onChange={(e) => setvars({ ...vars, raison: e.target.value })}
                        placeholder="Raison du changement"
                  /> 
              </div> 
        </div>
        <div className="row">
              <div>
                  <p>Description du changement</p>
                  <textarea
                        required
                        value={descri}
                        onChange={(e) => setvars({ ...vars, descri: e.target.value })}
                        placeholder="Description du changement"
                  />

              </div>
              <div>
                  <p>Impact pour non changement </p>
                  <textarea
                        required
                        value={impact}
                        onChange={(e) =>setvars({ ...vars, impact: e.target.value })}
                        placeholder="Impact pour non changement"
                  />
              </div>
        </div>
        <div className="row">
            <label>
                <input
                  type="checkbox"
                  checked={isTier}
                  onChange={(e) =>setvars({ ...vars, isTier: e.target.checked })}
                />
                L’implémentation du Change requiert l’implication d’un tier?
            </label>
            <div className="show-tier" style={{ display: isTier ? "block" : "none" }} >
                {/* <p>Nom du tier</p> */}
                <input
                  type="text"
                  value={tier}
                  onChange={(e) =>setvars({ ...vars, tier: e.target.value })}
                  placeholder="Nom de tier"
                />
            </div>
        </div>
       
        <hr className="line" />
        <div className="row">
            <div>
                <p>Change Builder</p>
                <input 
                  value={builder}
                  onChange={(e)=>setvars({ ...vars, builder: e.target.value })}
                  placeholder="Nom Complet"
                />
            </div>
            <div>
                <p>Entité infra</p>
                <input
                  type="text"
                  /* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"
                />
            </div> 
        </div>  
        <hr className="line" />
        <div className="row">
            <div>
                <p>Change Tester</p>
                <input 
                  value={tester}
                  onChange={(e)=>setvars({ ...vars, tester: e.target.value })}
                  placeholder="Nom Complet"
                />
            </div>
            <div>
                <p>Entité infra</p>
                <input
                  type="text"
                  /* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"
                />
            </div> 
        </div>
        <hr className="line" />
        <div className="row">
            <div>
                <p>Change Implementer</p>
                <input 
                  value={implementer}
                  onChange={(e)=>setvars({ ...vars, implementer: e.target.value })}
                  placeholder="Nom Complet"
                />
            </div>
            <div>
                <p>Entité infra</p>
                <input
                  type="text"
                  /* value={tier} onChange={(e)=>setTier(e.target.value)}*/ placeholder="Entité infra"
                />
            </div> 
        </div>
        
        <div className="savin">
                <input
                  id="btn"
                  type="submit"
                  onClick={(e) => validate(e)}
                  value="Save"
                />
        </div>
      </form>
    </div>
  );
}
