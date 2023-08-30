import React from 'react'

const Our = ({ about_us }) => {
  return (
    <section id="about-us" className="my-5">
      <div className="container">
        {about_us?.map((about) => (
          <div key={about.id}>
            <h5 className="font-weight-bold aos-init aos-animate" data-aos="fade-down">رؤيتنا</h5>
            <p data-aos="fade-zoom-in" className="aos-init aos-animate">{about.our_vision}</p>
            <h5 className="font-weight-bold aos-init aos-animate" data-aos="fade-down">رسالتنا</h5>
            <p data-aos="fade-zoom-in" className="aos-init aos-animate">{about.our_message}</p>
            <p></p>
            &#x202C;
            <p></p>

            <h5 className="font-weight-bold aos-init aos-animate" data-aos="fade-down">&#x202B;&#x202A;&#x202B;أهـدافـنـا&#x202C;</h5>
            <div className="row">
                {about.our_goals_ids?.map((goal) => (
                  <div key={goal.id} className="col-md-6">
                      <h6 className="font-weight-bold aos-init" data-aos="fade-in">{goal.name}</h6>
                      <p data-aos="fade-zoom-in" className="aos-init"></p>
                      <p>{goal.content}</p>
                      &#x202C;
                      <p></p>
                  </div>
                ))} 
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Our
