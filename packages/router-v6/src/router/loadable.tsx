import { lazy, Suspense } from 'react';

type ILoadable = {
  loader: any;
  loading?: any;
};

export const loadable = ({ loader }: ILoadable) => {
  const Comp = lazy(loader);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Comp />
    </Suspense>
  );
};
