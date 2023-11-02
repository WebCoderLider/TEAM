import Heading from '../../ui/Heading/Heading'
import { educatorsData } from '../../utils/educatorsData'
import { instagram_icon, linkedin_icon } from '../../assets'
import './educators.scss'

function Educators() {
  return (
    <section className="educators_section container">
      <Heading
        title="O’qituvchilarimiz"
        description="O’qituvchilar haqida qisqacha ma’lumotlar to’plami"
      />
      <div className="educators_body">
        {educatorsData.map(
          ({ name, id, image, job, description, instagram, linkedin }) => (
            <div className="educators_card" key={id}>
              <div className="card_wrapper">
                <div className="card_image">
                  <img src={image} alt={name} />
                </div>
                <div className="card_heading">
                  <h3>{name}</h3>
                  <h4>{job}</h4>
                </div>
                <div className="card_description">
                  <p>{description}</p>
                </div>
                <div className="card_footer">
                  <h2>Bog’lanish uchun tarmoqlar</h2>
                  <div className="social_media">
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instagram_icon} alt="" />
                    </a>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin_icon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  )
}

export default Educators
