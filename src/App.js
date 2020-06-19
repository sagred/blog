import React from 'react'
import './App.css'
import { useHistory } from 'react-router'

function App() {

    let history = useHistory();

    const click = () => {
        history.push("/title");
    }

    return (
      <div className = 'app'>
          <div className ='header'>
            <a className = 'title' >SagRed</a>
            <a className = 'id'>@sagred</a>
          </div>
          <div className = 'body' >
              <a onClick = {click}>
              <div className = 'card'>
                  <div className = 'cardImage'>
                   </div>
                   <div className = 'cardTitle'> 
                       Learn Web Development
                  </div>
              </div>
              </a>
              <div className = 'card'>
              <div className = 'cardImage'>
                   </div>
                   <div className = 'cardTitle'> 
                       Learn to Code...
                  </div>
              </div>
          </div>
          <div className = 'footer'>
           <h6> Copyright &copy; 2020 sagred. All rights reserved.</h6>
           <h5>AFFILIATE DISCLAIMER</h5>
           <h6>Most of the content is FREE. But some resource may contains affiliate links. When you purchase
               ,I may recieve commision from the seller, At no extra cost to yourself. Best way to invest in you skills & support the site!
           </h6>
          </div>
      </div>
    )
}

export default App
