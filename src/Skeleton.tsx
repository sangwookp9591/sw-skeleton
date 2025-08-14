import { skeleton, shimmerAnimation, shimmerStartVar, speedVar } from './skeleton.css';

export type SkeletonProps = {
    width: number | string;
    height: number | string;
    borderRadius?: number | string;
    backgroundColor?: string;
    shimmerStart?: string;
    speed?: number;
    style?: React.CSSProperties;
};

export default function Skeleton({
    width,
    height,
    borderRadius = 0,
    backgroundColor = 'rgb(230, 230, 230)',
    shimmerStart = '-150px',
    speed = 1.5,
    style,
}: SkeletonProps) {
    const MAXIMUM_SPEED = 3;
    return (
        <div
            className={skeleton()}
            style={{
                width,
                height,
                borderRadius,
                backgroundColor,
                [shimmerStartVar]: shimmerStart,
                [speedVar]: speed > MAXIMUM_SPEED ? MAXIMUM_SPEED : speed,
                ...style,
            }}
        >
            <div className={shimmerAnimation}></div>
        </div>
    );
}
