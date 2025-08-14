import React from 'react';
import styles from './skeleton.module.css';

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

  // gradient 계산
  const getShimmerBackground = () => {
    if (shimmerGradient) return shimmerGradient;
    const isVertical = direction.includes('top') || direction.includes('bottom');
    const gradientDirection = isVertical ? '180deg' : '90deg';
    return `linear-gradient(${gradientDirection}, transparent, ${shimmerColor}, transparent)`;
  };

  // direction에 따라 클래스 선택
  const directionClass = {
    'left-to-right': styles.leftToRight,
    'right-to-left': styles.rightToLeft,
    'top-to-bottom': styles.topToBottom,
    'bottom-to-top': styles.bottomToTop,
  }[direction];

  return (
    <div
      className={styles.skeletonBase}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
        ...style,
      }}
    >
      <div
        className={`${styles.shimmer} ${directionClass}`}
        style={{
          background: getShimmerBackground(),
          animationDuration: `${speed > MAX_SPEED ? MAX_SPEED : speed}s`,
        }}
      />
    </div>
  );
}
