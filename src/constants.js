import Fragment from './demos/fragment';
import Context from './demos/context';
import ErrorBoundary from './demos/errorBoundary';
import Portals from './demos/portals';
import HigherOrderComp from './demos/higherOrderComp';
import RenderProps from './demos/renderProps';
import UpdateLifecycle from './demos/updatedLifecycle';
import Profiler from './demos/profiler';
import Refs from './demos/refs';

export const DEMOS_ORDER = [
  'fragment',
  'portals',
  'errorBoundary',
  'profiler',
  'context',
  'refs',
  'renderProps',
  'higherOrderComp',
  'updatedLifecycle'
];

export const DEMOS = {
  fragment: {
    id: 'fragment',
    title: 'Fragment',
    description: 'Group a list of children without adding extra nodes to the DOM.',
    route: '/fragment',
    Component: Fragment,
  },
  context: {
    id: 'context',
    title: 'Context',
    description: 'Data moves through the component tree without having to pass props down at every level.',
    route: '/context',
    Component: Context,
  },
  errorBoundary: {
    id: 'errorBoundary',
    title: 'Error Boundaries',
    description: 'Catch JavaScript errors anywhere in their child component tree',
    route: '/error-boundary',
    Component: ErrorBoundary,
  },
  portals: {
    id: 'portals',
    title: 'Portals',
    description: 'Render children to any DOM node outside of parent',
    route: '/portals',
    Component: Portals,
  },
  higherOrderComp: {
    id: 'higherOrderComp',
    title: 'Higher-Order Components',
    description: 'Technique to reuse component logic',
    route: '/higher-order-components',
    Component: HigherOrderComp,
    extra: true
  },
  renderProps: {
    id: 'renderProps',
    title: 'Render Props',
    description: 'Technique to reuse component logic',
    route: '/render-props',
    Component: RenderProps,
    extra: true
  },
  updatedLifecycle: {
    id: 'updatedLifecycle',
    title: 'Updated Lifecycle Methods',
    description: 'componentWillRecieveProps  !==  getDerivedStateFromProps',
    route: '/updated-lifecycle',
    Component: UpdateLifecycle,
    extra: true
  },
  profiler: {
    id: 'profiler',
    title: 'Profiler & Functional setState',
    description: 'Using the profiler to inspect new ability to avoid re-render with functional setState',
    route: '/profiler',
    Component: Profiler,
  },
  refs: {
    id: 'refs',
    title: 'New Refs',
    description: 'Create & Forward refs to access DOM node properties',
    route: '/refs',
    Component: Refs,
  }
};
