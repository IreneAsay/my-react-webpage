import React from "react";

const About = () => {
  return (
    <div className="container col-lg-8 col-md-6 col-xs-10">
      <div className="row p-2">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <h1>About Me</h1>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <img
                src="assets/images/My-profile-photo2.png"
                alt="IreneAsay_img"
              />
              <p>
                I believe there is always room for improvement in each project
                and in everyday leadership. With nearly 10 years of project
                management experience (3+ years in a top 10 U.S. software
                company), I excel in monitoring project resources and
                deliverables from inception to completion. My multilingual
                skills (English, Chinese, and Taiwanese) enables me to
                coordinate with individuals of different cultural backgrounds
                more easily. My ability to collaborate with cross-functional
                teams continuously helps me deliver high-quality products.{" "}
              </p>

              <p>
                I successfully increased the workforce productivity, shortened
                project turnaround time and new project managers onboarding time
                at various roles. Working with numerous vendors and external
                stakeholders gave me opportunities to better understand the
                clients’ needs. In addition, I have a Master of Education from
                the University of Southern California and I am a national
                certified Project Management Professional (PMP®), Certified
                ScrumMaster (CSM®) and Certified Product Owner (CSPO®).
                Furthermore, I am currently enrolled in the Georgia Institute of
                Technology Full Stack Coding Bootcamp to enhance my technical
                skills. My educational background, experience, and
                certifications equip me with effective communication skills,
                project management techniques, and technical mindset for a
                variety of product development environments.
              </p>

              <div id="overflow-text">
                <p>
                  What makes me unique is my involvement in diversity
                  initiatives at different companies. I care about diversity at
                  the workplace and I enjoy promoting cultural awareness. I also
                  do volunteer work to give back to my community and I respect
                  people who do the same.{" "}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">
                  <h2>Hobbies</h2>
                  <p>
                    Dancing (hip hop, zumba, traditional Chinese dance), singing
                    karaoke, swimming, biking, playing badminton, and cuddling
                    with my kids.{" "}
                  </p>
                </li>
                <li className="list-group-item px-0">
                  <h2>Fun Facts</h2>
                  <p>
                    {" "}
                    I am blessed with two beautiful kids who are both bilingual
                    in English and Chinese. Most of my family are in Taiwan and
                    most of my husband's family are in California, so we love
                    Taiwanese cuisine as much as Mexican food.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
