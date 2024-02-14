import "./JST.css";

const JST = () => {
    return (
      <div>
      
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <img className="cards"   id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com/?user=SubodhSingh8543&theme=city_light&hide_border=false" alt="error" />
        <img className="cards"  id="github-top-langs"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=SubodhSingh8543&theme=city_light&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="error" />
        <img  className="cards"  id="github-stats-card"  src="https://github-readme-stats.vercel.app/api?username=SubodhSingh8543&theme=city_light&hide_border=false&include_all_commits=false&count_private=false" alt="error" />
        </div>

  
        <section style={{display:"flex",fontSize:"1px",opacity:0}}  id="skills">
          <h2 style={{fontSize:"1px",opacity:0}}>Skills</h2>
          <div class="skills-card">
            <img src="skill-1.jpg" alt="Skill 1" class="skills-card-img" />
            <h3 style={{fontSize:"1px",opacity:0}} class="skills-card-name">Skill 1</h3>
          </div>
          <div class="skills-card">
            <img src="skill-2.jpg" alt="Skill 2" class="skills-card-img" />
            <h3 style={{fontSize:"1px",opacity:0}} class="skills-card-name">Skill 2</h3>
          </div>
        </section>
  
          <section style={{display:"flex",fontSize:"1px",opacity:0}} id="contact">
          <div id="contact-phone">Phone Number</div>
          <div id="contact-email">Email Address</div>
        </section >
        <section style={{display:"flex",fontSize:"1px",opacity:0}} id="resume">
          <button id="resume-button-1">Download Resume</button>
        </section>
          </div>
  
    )
  }
  
  export {JST}