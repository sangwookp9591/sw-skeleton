import { skeletonBase, shimmerAnimation, shimmerGradientVar } from './skeleton.css';

export type SkeletonProps = {
  width: number | string;
  height: number | string;
  borderRadius?: number | string;
  backgroundColor?: string;
  direction?: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
  speed?: number; // 초 단위
  shimmerColor?: string;
  shimmerGradient?: string; // 커스텀 gradient
  style?: React.CSSProperties;
};

export function Skeleton({
  width,
  height,
  borderRadius = 0,
  backgroundColor = 'rgb(230, 230, 230)',
  speed = 1.5,
  direction,
  shimmerColor = 'rgba(255,255,255,0.4)',
  shimmerGradient,
  style,
}: SkeletonProps) {
  const MAX_SPEED = 3;

  const getShimmerBackground = () => {
    if (shimmerGradient) return shimmerGradient;

    // 안전한 체크 추가
    const isVertical = direction && (direction.includes('top') || direction.includes('bottom'));
    const gradientDirection = isVertical ? '180deg' : '90deg';

    return `linear-gradient(${gradientDirection}, transparent, ${shimmerColor}, transparent)`;
  };

  return (
    <div
      className={skeletonBase}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
        ...style,
      }}
    >
      {/* // 빌드 타임에 처리됨
                background: shimmerGradientVar, // CSS 변수 참조만 생성

                // 런타임에 처리됨  
                [shimmerGradientVar]: getShimmerBackground(), // 실제 값 할당
            //  */}
      <div
        className={shimmerAnimation({ direction })}
        style={{
          background: getShimmerBackground(),
          // [shimmerGradientVar]: getShimmerBackground(),
          animationDuration: `${speed > MAX_SPEED ? MAX_SPEED : speed}s`,
        }}
      />
    </div>
  );
}
