declare module 'react-parallax' {
  import { ComponentType, CSSProperties } from 'react';

  export interface ParallaxProps {
    bgImage?: string;
    bgImageAlt?: string;
    bgImageStyle?: CSSProperties;
    strength?: number;
    blur?: number | { min: number; max: number };
    bgClassName?: string;
    contentClassName?: string;
    className?: string;
    renderLayer?: (percentage: number) => JSX.Element;
    children?: React.ReactNode;
    style?: CSSProperties;
  }

  export const Parallax: ComponentType<ParallaxProps>;
}
