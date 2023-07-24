import React, { ReactNode, PropsWithChildren, ReactElement } from 'react';

export type WrapperType = (children: ReactNode | undefined) => ReactElement;

type Props = PropsWithChildren<{
  condition: boolean;
  wrapper: WrapperType;
  falsyWrapper?: WrapperType;
}>;

const ConditionalWrapper = ({ condition, wrapper, children, falsyWrapper }: Props) =>
  (condition
    ? React.cloneElement(wrapper(children))
    : falsyWrapper
    ? React.cloneElement(falsyWrapper(children))
    : children) as ReactElement<any, any>;

export default ConditionalWrapper;
