import React, { useState, useEffect, useContext } from 'react'; 
import './depdetails.css'; 
import { useHistory } from 'react-router'; 
 
export default function DepDetails(props){
    const history=useHistory();
    const deploy={N_ref:123,app:'oncf.ma',date:"11/11/2021",status:"Nouveau"};
    const dep=history.location.state || deploy;
                                          
    return <div className="details">
            <table>
              <tbody>
                    
                <tr>
                    <td>Numéro de Référence:</td>
                    <td>{dep.N_ref}</td>
                </tr>
                <tr>
                    <td>Etat de Référence:</td>
                    <td>{dep.status}</td>
                </tr>
                <tr>
                    <td>Date RFC:</td>
                    <td>{dep.date}</td>
                </tr>
                <tr>
                    <td>Système ou CI objet du changement:</td>
                    <td>{dep.app}</td>
                </tr>
                <tr>
                    <td>Raison du changement:</td>
                    <td>{dep.raison}</td>
                </tr>
                <tr>
                    <td>Description du changement:</td>
                    <td>{dep.descri}</td>
                </tr>
                <tr>
                    <td>Impact pour non changement:</td>
                    <td>{dep.impact}</td>
                </tr>
                <tr>
                    <td>L’implémentation du Change requiert l’implication d’un tier:</td>
                    <td>{dep.isTier? dep.tier:"Non"}</td>
                </tr> 
              </tbody> 
            </table>
            <br/><br/>
            <table>
                <thead style={{background:"sandybrown"}}>
                  <tr>
                        <th style={{height:'40px'}}>Additional Information </th>
                        <th>Nom complet </th>
                        <th>Entité infra </th>
                  </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>Change Builder</td>
                        <td>{dep.builder}</td>
                        <td>task</td>                 
                    </tr>
                    <tr>
                        <td>Change Tester</td>
                        <td>{dep.tester}</td>
                        <td>task</td>                 
                    </tr>
                    <tr>
                        <td>Change Implementer</td>
                        <td>{dep.implementer}</td>
                        <td>task</td>                 
                    </tr>
                    
                </tbody>
            </table>
        
        </div>

}