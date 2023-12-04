import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const OurServices = () => {
    const handleLinkClick= () =>{
        setTimeout(()=>{
          alert("SADS")
          scroll.scrollTo("#our-services", {
            smooth: true,
            spy:true,
            offset: -70,
            duration: 500
          });
        },1111)
      }
  return (
    <div id="our-services">
        <button onClick={()=>handleLinkClick()}>asd</button>
      <h3 className="shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-center m-4" >Nuestros servicios</h3>
        <div class="row d-flex justify-content-center m-10">
            <div className="card mx-5 my-3" style={{ width: '18rem' }}>
                <img src="https://cdn.discordapp.com/attachments/1180957030673035304/1180964039564742696/ivanfernandezballestrasse_a_man_in_garen_from_league_of_legends_f4a5823f-0d0e-48b2-afa9-0ecc3e1006a7_ins.jpg?ex=657f5578&is=656ce078&hm=093eac4cf1a755897c44dac0c3a50bc44955db711c0ab4d4bbb32a75b83acdc3&" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Curso A2</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver más</a>
                </div>
            </div>

            <div className="card mx-5 my-3" style={{ width: '18rem' }}>
                <img src="https://cdn.discordapp.com/attachments/1180957030673035304/1180964039564742696/ivanfernandezballestrasse_a_man_in_garen_from_league_of_legends_f4a5823f-0d0e-48b2-afa9-0ecc3e1006a7_ins.jpg?ex=657f5578&is=656ce078&hm=093eac4cf1a755897c44dac0c3a50bc44955db711c0ab4d4bbb32a75b83acdc3&" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Curso B1</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver más</a>
                </div>
            </div>

            <div className="card mx-5 my-3" style={{ width: '18rem' }}>
                <img src="https://cdn.discordapp.com/attachments/1180957030673035304/1180964039564742696/ivanfernandezballestrasse_a_man_in_garen_from_league_of_legends_f4a5823f-0d0e-48b2-afa9-0ecc3e1006a7_ins.jpg?ex=657f5578&is=656ce078&hm=093eac4cf1a755897c44dac0c3a50bc44955db711c0ab4d4bbb32a75b83acdc3&" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Tramites y licencias</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div><br/>
        <h4 class="d-flex justify-content-center" >¿Trabajas o estudias? ¡No te preocupes!
            Tenemos HORARIOS FLEXIBLES 6:00 am a 10:00 pm
        </h4>
    </div>
  )
}

export default OurServices
