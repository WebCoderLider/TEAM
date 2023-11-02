import './CourseInfo.scss'
import { courseInfoData } from '../../utils/courseInfoData'

const CourseInfo = () => {
	return (
		<div className='course-info container'>
			<div className='course-info__content'>
				{courseInfoData &&
					courseInfoData.map(item => {
						return (
							<div className='course-info__article'>
								<div className='course-info__icon'>
									<img src={item.image} alt='online test icon' />
								</div>
								<div>
									<h3 className='course-info__title'>{item.title}</h3>
									<p className='course-info__paragraph'>{item.description}</p>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default CourseInfo
