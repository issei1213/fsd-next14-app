import { ComponentType, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  as: ComponentType<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>;
}>;
export const Heading = ({ children, as = 'h1' }: Props) => {
  const Component = as;
  return <Component>{children}</Component>;
};
