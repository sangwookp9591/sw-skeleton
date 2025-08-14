import { skeletonBase, shimmerAnimation } from './skeleton.css';

export type SkeletonProps = {
    width: number | string;
    height: number | string;
    borderRadius?: number | string;
    backgroundColor?: string;
    shimmerStart?: number; // px 단위
    speed?: number; // 초 단위
    style?: React.CSSProperties;
};

export default function Skeleton({
    width,
    height,
    borderRadius = 0,
    backgroundColor = 'rgb(230, 230, 230)',
    shimmerStart = -150,
    speed = 1.5,
    style,
}: SkeletonProps) {
    const MAX_SPEED = 3;

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
            <div
                className={shimmerAnimation}
                style={{
                    transform: `translateX(${shimmerStart}px)`,
                    animationDuration: `${speed > MAX_SPEED ? MAX_SPEED : speed}s`,
                }}
            />
        </div>
    );
}
