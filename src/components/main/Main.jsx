import React from "react";
import "./main.css";
const Main = () => {


  return (
    
    <main className="main">
      <div className="leftm">
        <button className="active">all projects</button>
        <button>react projects</button>
        <button>html & css</button>
        <button>spring boot</button>
      </div>

      <div className="rightm">

<article className="card">
<img src="" alt="" />
<div className="box">

  <h1 className="title-card">title</h1>
  <p className="sub-card">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem alias voluptatem doloribus fugit quibusdam consectetur eos minima corporis, fuga quia ipsa veritatis commodi nihil suscipit perferendis soluta ea. Exercitationem, placeat?</p>

<div className="icon-card">

<div className="icon-link">
</div>
<div className="icon-github">
</div>

<a href="">
more <span className="icon-arrow-right"></span>

</a>

</div>


</div>

</article>

      </div>
    </main>
  );
};

export default Main;
