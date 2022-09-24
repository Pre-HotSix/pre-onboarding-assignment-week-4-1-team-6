declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.otf';

declare module 'quill-image-resize-module-react';