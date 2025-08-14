import { style, keyframes, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// CSS 변수 생성
export const shimmerStartVar = createVar();
export const speedVar = createVar();

// shimmer 애니메이션 keyframes 정의
export const shimmerKeyframes = keyframes({
    '0%': { left: shimmerStartVar },
    '100%': { left: '100%' },
});

export const skeleton = recipe({
    base: {
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgb(230, 230, 230)',
    },
    variants: {
        shimmerStart: {
            small: { [shimmerStartVar]: '-100px' },
            medium: { [shimmerStartVar]: '-150px' },
            large: { [shimmerStartVar]: '-200px' },
        },
    },
});

export const shimmerAnimation = style({
    position: 'absolute',
    top: 0,
    left: shimmerStartVar, // CSS 변수 사용
    width: '150px',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    animation: `1.5s infinite ${shimmerKeyframes}`,
});
