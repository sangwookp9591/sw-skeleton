import styles from './Skeleton.module.css';

export type SkeletonProps = {
    width: number | string;
    height: number | string;
    borderRadius?: number | string;
    backgroundColor?: string;
    style?: React.CSSProperties;
};

export default function Skeleton({ width, height, borderRadius, backgroundColor, style }: SkeletonProps) {
    return (
        <div
            className={styles.skeleton}
            style={{
                width,
                height,
                borderRadius: borderRadius || 0,
                backgroundColor: backgroundColor || 'rgb(230, 230, 230)',
                ...style,
            }}
        ></div>
    );
}
