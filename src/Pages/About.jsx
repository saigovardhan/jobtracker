import { Link } from "react-router-dom";

function About(){
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Page</h1>
            <p className="py-6">
              veggalam.saigovardhan@gmail.com
            </p>
            <Link to='/' className="btn btn-primary">Home</Link>
          </div>
        </div>
      </div>
    );
}
export default About;