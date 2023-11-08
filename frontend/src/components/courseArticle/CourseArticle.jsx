import './CourseArticle.scss'
import {
  littleGirl,
  starIcons,
  timeIcon,
  downloadIcon,
  videoIcon,
} from '../../assets'

function CourseArticle() {
  return (
    <div className="course-article">
      <img
        src={littleGirl}
        alt="little-girl-participating"
        className="course-article__image"
      />
      <span className="course-article__head">
        <h4 className="course-article__type">UI/UX Dizayner</h4>
        <div>
          <img src={starIcons} alt="start icons" />
          <img src={starIcons} alt="start icons" />
          <img src={starIcons} alt="start icons" />
          <img src={starIcons} alt="start icons" />
          <img src={starIcons} alt="start icons" />
        </div>
      </span>
      <h3 className="course-article__title">UI/UX DIZAYNERLIK BO’YICHA</h3>
      <span className="course-article__price">$98</span>
      <div className="course-article__constans">
        <span>
          <img src={timeIcon} alt="video icon" />
          <p>22soat, 30m</p>
        </span>
        <span>
          <img src={videoIcon} alt="video icon" />
          <p>23 ta video</p>
        </span>
        <span>
          <img src={downloadIcon} alt="video icon" />
          <p>0 ta yuklab olindi</p>
        </span>
      </div>
      <div className="course-article__button-content">
        <button className="course-article__button">Kursga kirish</button>
      </div>
    </div>
  )
}

export default CourseArticle
