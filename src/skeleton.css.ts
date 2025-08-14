import { style, keyframes, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// CSS 변수 생성
export const shimmerStartVar = createVar();
export const speedVar = createVar();

// shimmer 애니메이션  keyframes 정의 (left 고정)
const shimmerKeyframes = keyframes({
    '0%': { transform: 'translateX(-150px)' },
    '100%': { transform: 'translateX(100%)' },
});

export const skeletonBase = style({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgb(230, 230, 230)',
});

export const shimmerAnimation = style({
    position: 'absolute',
    top: 0,
    left: 0, // (left는 transform으로 조절)
    width: '150px',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    animation: `1.5s infinite ${shimmerKeyframes}`,
});
