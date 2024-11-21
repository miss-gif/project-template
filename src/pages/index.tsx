import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

const Loading = () => <div>Loading...</div>

const AppRoutes = () => {
  const element = useRoutes(routes)
  return <Suspense fallback={<Loading />}>{element}</Suspense>
}

export default AppRoutes
