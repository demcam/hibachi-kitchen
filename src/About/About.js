import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./About.css";

function About() {
  AOS.init({ duration: 500, offset: 200 });

  return (
    <div className="about_section" data-aos="fade-up">
      <div className="about_section__title">
        <h1>About</h1> &nbsp; <h1 className="dark_word">Us</h1>
      </div>
      <div className="about_section__infoImg">
        <div>
          <p className="about_section__info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            eius. Porro libero labore illum eum architecto, officiis alias
            obcaecati ea autem ex provident incidunt sit sunt saepe soluta
            deserunt magnam nemo quo illo ipsam minima! Doloribus, veritatis cum
            consectetur eius est, recusandae voluptas debitis temporibus tempore
            quia, in consequuntur corporis cupiditate facere eligendi.
            Recusandae doloribus obcaecati deleniti exercitationem ad, at
            adipisci laudantium. Nostrum saepe ipsum magnam inventore ex ipsa
            ipsam in, sint quod sit sunt delectus quidem temporibus magni
            eveniet voluptate explicabo deleniti animi numquam debitis officia,
            itaque dolor! Ut minima reiciendis repellendus, vitae odit molestias
            blanditiis placeat earum nam sapiente nemo iusto consequuntur vero
            excepturi dolores qui? Perferendis, fugiat sunt labore sed sit
            dolore blanditiis alias! Magnam ad nam expedita tempore nihil nemo
            labore ab fugiat. Repellat possimus est ex et doloribus sint eum,
            vel temporibus aperiam corrupti iure nam dignissimos recusandae
            dolorum eius labore. Dolorum magni non perspiciatis.
          </p>
        </div>
        <div>
          <img
            className="about_section__img"
            src="https://bloximages.chicago2.vip.townnews.com/journaltimes.com/content/tncms/assets/v3/editorial/5/7b/57b6efaf-6880-5453-acaa-d0ed048e7106/5a18c240765a5.image.jpg?resize=1200%2C960"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
