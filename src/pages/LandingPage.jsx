import Navbar from "../components/Navbar";
import { SharedVariablesProvider } from "../context/SharedVariableContextFile.jsx";
import { Link } from "react-router-dom";
import "../App.css";
import { FaStar } from "react-icons/fa";


function LandingPage () {

return (
    <div className=""> 
        <Link to="/"></Link>
        <button type="button" className="btn btn-primary">
        4.9 / 5 stars by 100+ customers <span class="badge badge-pill badge-light">Light</span>
        </button> 

        <h3>The what it actually is for target market</h3>
        <h1 className="display-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
        <p className="lead">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
        </p>


        <div class="text-center">
            <img src="https://imgs.search.brave.com/GsnZm7jbA-RyHhWUtJaNBNPChqRjmFohmhbkp4dyf-8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/NDYwOTcyMC9waG90/by9jdXRlLWRvZy1y/dW5uaW5nLW91dHNp/ZGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUEtYjFKdmls/U3lNOGZ1eE5KOWJ0/T28wTE52TGRpbnhs/NGhLbVVqSm83TXM9" class="rounded" alt="..."/>
        </div>

        {/* button */}
        <button className = "btn btn-lg btn-primary gap-3">Create Profile</button>
        <div class="card-group">

  <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
        
    </div>
)


}
export default LandingPage;