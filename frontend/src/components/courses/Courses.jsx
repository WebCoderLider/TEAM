import './Courses.scss'
import CourseArticle from '../courseArticle/CourseArticle'
import Heading from '../../ui/Heading/Heading'
import { lampImage, arrowImage } from '../../assets/index'

const Courses = () => {
  return (
    <div className="courses container">
      <div className="courses__head">
        <img src={lampImage} alt="lamp image" className="courses__lamp" />
        <Heading
          title="Arzon kurslar"
          description="Shior: “Arzon degani sifatsiz degani emas!”"
        />
        <img src={arrowImage} alt="arrow image" className="courses__arrow" />
      </div>
      <div className="courses__content container">
        <CourseArticle />
        <CourseArticle />
        <CourseArticle />
      </div>
    </div>
  )
}

export default Courses
