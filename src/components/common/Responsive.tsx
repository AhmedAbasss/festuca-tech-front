import React, { ReactNode } from 'react';
import Responsive from 'react-responsive';

type ResponsiveProps = React.PropsWithChildren<any>;

const XXL: React.FC<ResponsiveProps> = (props) => <Responsive {...props} minWidth={1601} />;
const XL: React.FC<ResponsiveProps> = (props) => <Responsive {...props} minWidth={1200} maxWidth={1600} />;
const Desktop: React.FC<ResponsiveProps> = (props) => <Responsive {...props} minWidth={992} />;
const Tablet: React.FC<ResponsiveProps> = (props) => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile: React.FC<ResponsiveProps> = (props) => <Responsive {...props} maxWidth={575} />;
const Default: React.FC<ResponsiveProps> = (props) => <Responsive {...props} minWidth={576} />;

export {
  XXL,
  XL,
  Desktop,
  Tablet,
  Mobile,
  Default
};
