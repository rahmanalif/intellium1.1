"use client";

import React, { useEffect, useRef, useState, useId } from 'react';

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: 'R' | 'G' | 'B';
  yChannel?: 'R' | 'G' | 'B';
  mixBlendMode?:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'
    | 'plus-darker'
    | 'plus-lighter';
  className?: string;
  style?: React.CSSProperties;
}

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDark;
};

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = 'R',
  yChannel = 'G',
  displace = 0,
  className = '',
  style = {}
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;

  const [svgSupported, setSvgSupported] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

  const isDarkMode = useDarkMode();

  const generateDisplacementMap = React.useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    
    // Calculate percentages for the refraction edges
    const refractionEdgeSize = Math.min(actualWidth, actualHeight) * 0.25;
    const xEdgePct = (refractionEdgeSize / actualWidth) * 100;
    const yEdgePct = (refractionEdgeSize / actualHeight) * 100;

    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgb(0, 0, 0)" />
            <stop offset="${xEdgePct}%" stop-color="rgb(128, 0, 0)" />
            <stop offset="${100 - xEdgePct}%" stop-color="rgb(128, 0, 0)" />
            <stop offset="100%" stop-color="rgb(255, 0, 0)" />
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgb(0, 0, 0)" />
            <stop offset="${yEdgePct}%" stop-color="rgb(0, 128, 0)" />
            <stop offset="${100 - yEdgePct}%" stop-color="rgb(0, 128, 0)" />
            <stop offset="100%" stop-color="rgb(0, 255, 0)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: lighten" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  }, [borderRadius, redGradId, blueGradId]);

  const updateDisplacementMap = React.useCallback(() => {
    feImageRef.current?.setAttribute('href', generateDisplacementMap());
  }, [generateDisplacementMap]);

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset }
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute('scale', (distortionScale + offset).toString());
        ref.current.setAttribute('xChannelSelector', xChannel);
        ref.current.setAttribute('yChannelSelector', yChannel);
      }
    });

    const finalBlur = blur || displace;
    gaussianBlurRef.current?.setAttribute('stdDeviation', finalBlur.toString());
  }, [
    updateDisplacementMap,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
  ]);

  useEffect(() => {
    const supportsSVGFilters = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return false;
      }

      const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
      const isFirefox = /Firefox/.test(navigator.userAgent);

      if (isWebkit || isFirefox) {
        return false;
      }

      const div = document.createElement('div');
      div.style.backdropFilter = `url(#${filterId})`;

      return div.style.backdropFilter !== '';
    };

    const supported = supportsSVGFilters();
    const timeoutId = setTimeout(() => {
      setSvgSupported(prev => prev !== supported ? supported : prev);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [filterId]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      updateDisplacementMap();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateDisplacementMap]);

  useEffect(() => {
    updateDisplacementMap();
  }, [width, height, updateDisplacementMap]);

  const supportsBackdropFilter = () => {
    if (typeof window === 'undefined') return false;
    return CSS.supports('backdrop-filter', 'blur(10px)');
  };

  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      ...style,
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: `${borderRadius}px`,
      '--glass-frost': backgroundOpacity,
      '--glass-saturation': saturation
    } as React.CSSProperties;

    const backdropFilterSupported = supportsBackdropFilter();

    if (svgSupported) {
      const finalBlur = blur || displace;
      return {
        ...baseStyles,
        background: isDarkMode ? `hsl(0 0% 0% / ${backgroundOpacity})` : `hsl(0 0% 100% / ${backgroundOpacity})`,
        backdropFilter: `url(#${filterId}) blur(${finalBlur}px) saturate(${saturation})`,
        WebkitBackdropFilter: `url(#${filterId}) blur(${finalBlur}px) saturate(${saturation})`,
        boxShadow: isDarkMode
          ? `0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
             0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset`
          : `0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
             0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset`
      };
    } else {
      if (isDarkMode) {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`
          };
        } else {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)',
            WebkitBackdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`
          };
        }
      } else {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)`
          };
        } else {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(20px) saturate(1.8) brightness(1.1)',
            WebkitBackdropFilter: 'blur(40px) saturate(8.8) brightness(1.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)`
          };
        }
      }
    }
  };

  const glassSurfaceClasses =
    'relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out outline-none select-none';

  return (
    <div
      ref={containerRef}
      className={`${glassSurfaceClasses} ${className}`}
      style={{
        ...getContainerStyles(),
        WebkitTapHighlightColor: 'transparent',
      } as React.CSSProperties}
    >
      <svg
        className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0" />
          </filter>
        </defs>
      </svg>

      <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
