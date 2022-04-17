import React,{useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion'
const Infringementpolicy=()=>{
        useEffect(()=>{
                window.scrollTo(0, 0);
              },[])
        return(
                <div className="px-80 bg-gray-100 py-10">
<h1 className="text-blue-500 font-bold">Infregment Policy</h1>
<hr/>
<p className="text-sm">
All the trademark, logos, service names and other marks are property of address guru and the vendors.
<br/><br/>
Address Guru uses the marks and information of the vendors for the distribution of information. Address guru have no intention to falsely claim any property owned by the vendors.
<br/><br/>
The infringement policy of Address Guru states that all the property provided on the website are owned by the vendors and users providing information on the website which comply to the Address Guru rules of posting.
<br/><br/>
If you find any information is violating any intellectual property, then you can report the infringement at contact@addressguru.in
<br/><br/>
How to report listing infringement. You infringement email should include these things :
<br/><br/>
Identification of the infringed property Description of the information or material that has been infringed Your address, contact number and email A written statement confirming that the information provided by you is correct and you hold the utmost right to the property and act as the rightful owner of the property. Brand name (in case of Trademark infringement) Details of the property infringed Documents for legal proceedings against the party infringing the property.

</p>
                </div>
        )
}


export default Infringementpolicy