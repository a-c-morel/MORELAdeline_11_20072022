import Tag from "../components/Tag"
import Collapse from "../components/Collapse"
import RatingStars from './RatingStars'

export default function Info({id, accomodation}) {
  return (
    <>
      <section className="accomodation-info">
        <div className="flex-container-first">
          <h1 className="accomodation-info__title" key={id+accomodation.title.length}>{accomodation.title}</h1>
          <p className="accomodation-info__location" key={id+accomodation.location.length}>{accomodation.location}</p>
          <ul className="tags">
            {accomodation.tags.map(tag => {
                return <Tag className="tag" tag={tag} key={tag} />
              }
            )}
          </ul>
        </div>
        <div className="flex-container-second">
          <RatingStars id={accomodation.id} rating={accomodation.rating}/>
          <div className="identity">
            <p className="identity__name" key={id+accomodation.host.name}>{accomodation.host.name}</p>
            <div className="profile-img-container">
              <img className="profile-image" src={accomodation.host.picture} alt="profil"/>
            </div>
          </div>
        </div>
      </section>

      <div className="collapses-container">
        <Collapse className="collapse-container--info" collapseTitle="Description">
          <li>{accomodation.description}</li>
        </Collapse>

        <Collapse className="collapse-container--info" collapseTitle="Equipements">
          {accomodation.equipments.map(equipment => {
            return <li key={id+equipment}>{equipment}</li>
          })}
        </Collapse>
      </div>
    </>
  )
}

