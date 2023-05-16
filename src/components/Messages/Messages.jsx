import { Suspense, lazy } from 'react'

const Loading = lazy(() => import('./Loading'))
const Calculated = lazy(() => import('./Calculated'))
const Error = lazy(() => import('./Error'))
const Empty = lazy(() => import('./Empty'))
const NoResults = lazy(() => import('./NoResults'))
const Counting = lazy(() => import('./Counting'))
const NoYet = lazy(() => import('./NoYet'))


const Messages = ({ type }) => {
  const messages = {
    'loading' : <Loading />,
    'error' : <Error />,
    'empty' : <Empty />,
    'no_results' : <NoResults />,
    'counting' : <Counting />,
    'no_yet' : <NoYet />,
    'calculated' : <Calculated />
  }
  
  return (
    <Suspense fallback={<br />}>
      { messages[type] }
    </Suspense>
  )
}

export default Messages