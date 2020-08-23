import Test from '../components/Test'
import Directives from '../components/Directives'
import Methods from '../components/Methods'

const NotFound = () => <div>Not Found</div>

export const routes = [
  {
    path: '/test/:name',
    name: 'test',
    component: Test,
    props: true,
    children: [{
      path: 'test',
      components: {
        default: Test,
        second: Methods
      }
    }]
  },
  {
    path: '/methods',
    component: Methods
  },
  {
    path: '/directives',
    component: Directives
  },
  {
    path: 'not-found',
    alias: '*',
    component: NotFound
  }
]




