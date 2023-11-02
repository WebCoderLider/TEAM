import './CourseArticle.scss'
import { littleGirl } from '../../assets'

function CourseArticle() {
	return (
		<div className='course'>
			<img src={littleGirl} alt='little-girl-participating' />
			<span>
				<h3 className='course__type'>UI/UX Dizayner</h3>
				<div>
					<img src='' alt='' />
				</div>
			</span>
			<h2 className='course__title'>UI/UX DIZAYNERLIK BO’YICHA</h2>
			<span className='price'>$98</span>
		</div>
	)
}

export default CourseArticle
