import Fragment from './demos/fragment';
import Context from './demos/context';
import ErrorBoundary from './demos/errorBoundary';
import Portals from './demos/portals';
import HigherOrderComp from './demos/higherOrderComp';
import RenderProps from './demos/renderProps';
import UpdateLifecycle from './demos/updatedLifecycle';
import Profiler from './demos/profiler';

export const DEMOS_ORDER = [
  'fragment',
  'portals',
  'errorBoundary',
  'profiler',
  'context',
  'renderProps',
  'higherOrderComp',
  'updatedLifecycle'
];

export const DEMOS = {
  fragment: {
    id: 'fragment',
    title: 'Fragment',
    description: 'Group a list of children without adding extra nodes to the DOM.',
    version: '16.3.4',
    route: '/fragment',
    Component: Fragment,
  },
  context: {
    id: 'context',
    title: 'Context',
    description: 'Data moves through the component tree without having to pass props down at every level.',
    route: '/context',
    version: '16.4.3',
    Component: Context,
  },
  errorBoundary: {
    id: 'errorBoundary',
    title: 'Error Boundaries',
    description: 'Catch JavaScript errors anywhere in their child component tree',
    route: '/error-boundary',
    version: '16.4.3',
    Component: ErrorBoundary,
  },
  portals: {
    id: 'portals',
    title: 'Portals',
    description: 'Render children to any DOM node outside of parent',
    route: '/portals',
    version: '16.4.3',
    Component: Portals,
  },
  higherOrderComp: {
    id: 'higherOrderComp',
    title: 'Higher-Order Components',
    description: 'Technique to reuse component logic',
    route: '/higher-order-components',
    version: '16.4.3',
    Component: HigherOrderComp,
  },
  renderProps: {
    id: 'renderProps',
    title: 'Render Props',
    description: 'Technique to reuse component logic',
    route: '/render-props',
    version: '16.4.3',
    Component: RenderProps,
  },
  updatedLifecycle: {
    id: 'updatedLifecycle',
    title: 'Updated Lifecycle Methods',
    description: 'componentWillRecieveProps  !==  getDerivedStateFromProps',
    route: '/updated-lifecycle',
    version: '16.4.3',
    Component: UpdateLifecycle,
  },
  profiler: {
    id: 'profiler',
    title: 'Profiler & Functional setState',
    description: 'Using the profiler to inspect new ability to avoid re-render with functional setState',
    route: '/profiler',
    version: '16.4.3',
    Component: Profiler,
  }
};
