import React, { CSSProperties } from 'react';

export type SkeletonProps = {
  width: number | string;
  height: number | string;
  borderRadius?: number | string;
  backgroundColor?: string;
  direction?: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
  speed?: number; // 초 단위
  shimmerColor?: string;
  shimmerGradient?: string;
  style?: React.CSSProperties;
};

export function Skeleton({
  width,
  height,
  borderRadius = 0,
  backgroundColor = 'rgb(230, 230, 230)',
  speed = 1.5,
  direction = 'left-to-right',
  shimmerColor = 'rgba(255,255,255,0.4)',
  shimmerGradient,
  style,
}: SkeletonProps) {
  const MAX_SPEED = 3;
  const animationSpeed = speed > MAX_SPEED ? MAX_SPEED : speed;

  // 고유한 애니메이션 이름 생성
  const animationId = `skeleton-shimmer-${Math.random().toString(36).substr(2, 9)}`;

  // gradient 계산
  const getShimmerBackground = () => {
    if (shimmerGradient) return shimmerGradient;
    const isVertical = direction.includes('top') || direction.includes('bottom');
    const gradientDirection = isVertical ? '180deg' : '90deg';
    return `linear-gradient(${gradientDirection}, transparent, ${shimmerColor}, transparent)`;
  };

  // 애니메이션 키프레임 생성
  const getKeyframes = () => {
    switch (direction) {
      case 'left-to-right':
        return `
          @keyframes ${animationId} {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `;
      case 'right-to-left':
        return `
          @keyframes ${animationId} {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `;
      case 'top-to-bottom':
        return `
          @keyframes ${animationId} {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `;
      case 'bottom-to-top':
        return `
          @keyframes ${animationId} {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-100%); }
          }
        `;
      default:
        return `
          @keyframes ${animationId} {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `;
    }
  };

  const skeletonBaseStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width,
    height,
    borderRadius,
    backgroundColor,
    ...style,
  };

  const shimmerStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: getShimmerBackground(),
    animation: `${animationId} ${animationSpeed}s ease-in-out infinite`,
  };

  return (
    <>
      <style>{getKeyframes()}</style>
      <div style={skeletonBaseStyle}>
        <div style={shimmerStyle} />
      </div>
    </>
  );
}
