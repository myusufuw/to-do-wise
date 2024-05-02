import Task from 'src/pages/Task/Task'
import paths from 'src/constants/paths'
import Search from 'src/pages/Search/Search'
import Planned from 'src/pages/Planned/Planned'
import Important from 'src/pages/Important/Important'

interface Route {
 path: string,
 element: typeof Task | typeof Planned | typeof Important
}

const routes: Route[] = [
  {
    path: paths.task,
    element: Task
  },
  {
    path: paths.planned,
    element: Planned
  },
  {
    path: paths.important,
    element: Important
  },
  {
    path: paths.search,
    element: Search
  }
]

export default routes