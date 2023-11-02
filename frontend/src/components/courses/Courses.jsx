import './Courses.scss'
import CourseArticle from '../courseArticle/CourseArticle'
import Heading from '../../ui/Heading/Heading'

const Courses = () => {
  return (
    <div className="courses container">
      <Heading
        title="Arzon kurslar"
        description="Shior: “Arzon degani sifatsiz degani emas!”"
      />
      <div className="courses__content container">
        <CourseArticle />
        <CourseArticle />
        <CourseArticle />
      </div>
    </div>
  )
}

export default Courses
