import { AiOutlineDollar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({ job })  => {
     
    const {id, logo, job_title, company_name,remote_or_onsite , location, job_type, salary, job_description} = job;
    return (
        <div>
       <div className="card bg-base-100 shadow-xl">
  <figure><img src={logo} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {job_title}
      <div className="badge badge-secondary">{company_name}</div>
    </h2>
   <div>
    <p>{job_description}</p>
   </div>
    
    <div className="text-center">
      <button className="btn btn-outline text-sky-300 px-4 mr-4">{remote_or_onsite}</button>
      <button className="btn btn-outline text-sky-300 px-4 ml-4"> {job_type} </button>
    </div>
<div className="flex m-4 justify-between">
  <h2 className="flex">
    <MdLocationPin className="text-2xl"> </MdLocationPin>
 {location}  </h2>
<h2 className="flex">
    <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
  {salary}
  </h2>
</div>
  
     <div className="card-actions"> 
  <Link to={`/job/${id}`}>
      <button className="btn btn-primary">
View details
      </button>
  </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;