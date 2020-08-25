import Test from '../components/Test'
import Directives from '../components/Directives'
import Methods from '../components/Methods'
import Protected from '../components/Protected'

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
    path: '/protected',
    component: Protected,
    meta: {
      isProtected: true
    }
  },
  {
    path: 'not-found',
    alias: '*',
    component: NotFound
  }
]




