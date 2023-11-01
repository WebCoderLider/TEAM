import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { ErrorPage, HomePage, Login, Register } from './pages'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />}></Route>
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/error' element={<ErrorPage />} />
		</Routes>
	)
}

export default App
