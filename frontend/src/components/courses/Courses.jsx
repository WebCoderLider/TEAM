import './Courses.scss'
import CourseArticle from '../courseArticle/CourseArticle'

const Courses = () => {
  return (
    <div className="courses container">
      <h2 className="courses__title">Arzon kurslar</h2>
      <p className="courses__paragraph">
        Shior: “Arzon degani sifatsiz degani emas!”
      </p>
      <div className="courses__content container">
        <CourseArticle />
        <CourseArticle />
        <CourseArticle />
      </div>
    </div>
  )
}

export default Courses
