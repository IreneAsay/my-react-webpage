import React from "react";

const Contact = () => {
  return (
    <div className="container col-lg-3 col-md-6 col-xs-12">
      <div className="row p-2">
        <h1 className="col-lg-12 col-md-12 col-xs-12">Contact</h1>
      </div>
      <div className="card p-3 mb-2 bg-secondary text-white">
        <img
          src="./images/Dance.gif"
          className="card-img-top"
          alt="dancing kids"
        />
        <div className="card-body">
          <h5 className="card-title">Want to know more?</h5>
          <p className="card-text">
            If you are interested to learn more about my work experience or
            professional background, please check out the links below or email
            me directly.
          </p>
        </div>
        <ul className="list-group list-group-flush"></ul>
        <div className="card-body ">
          <a
            href="https://drive.google.com/file/d/1U2O6dk_whdfESuuPJ5LP-fwMuWAYE7eI/preview"
            target="_blank"
            rel="noreferrer"
            className="card-link p-2 mb-2 bg-secondary text-white"
          >
            Resume
          </a>
          <a
            href="https://github.com/IreneAsay"
            target="_blank"
            rel="noreferrer"
            className="card-link p-2 mb-2 bg-secondary text-white"
          >
            Github
          </a>
          <a
            href="http://www.linkedin.com/in/ireneasay"
            target="_blank"
            rel="noreferrer"
            className="card-link p-2 mb-2 bg-secondary text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="row" id="button">
        <div className="col-lg-4 col-md-4 col-xs-4 mt-3">
          <a
            className="btn btn-primary p-2 mb-2"
            href="mailto:irene.hsu.asay@gmail.com"
            role="button"
          >
            Email Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
