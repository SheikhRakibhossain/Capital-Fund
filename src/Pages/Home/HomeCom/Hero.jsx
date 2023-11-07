
const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/this-is-your-booking-trip-young-man-planning-vacation-about-sign-purchase-agreement-with-travel-agent_662251-2163.jpg?w=1380&t=st=1699362954~exp=1699363554~hmac=2d36a1caa1a8dbf19445278e86802457c7476199346dfcb43aea64ba6f3a4c88)'}}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;