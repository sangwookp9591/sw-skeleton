import { style, keyframes, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// CSS 변수 생성
// export const shimmerStartVar = createVar();
// export const speedVar = createVar();

export const skeletonBase = style({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgb(230, 230, 230)',
});
// shimmer 애니메이션  keyframes 정의
const shimmerLeftToRight = keyframes({
    '0%': { transform: 'translateX(-150px)' },
    '100%': { transform: 'translateX(100%)' },
});

const shimmerRightToLeft = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-150px)' },
});

const shimmerTopToBottom = keyframes({
    '0%': { transform: 'translateY(-150px)' },
    '100%': { transform: 'translateY(100%)' },
});

const shimmerBottomToTop = keyframes({
    '0%': { transform: 'translateY(100%)' },
    '100%': { transform: 'translateY(-150px)' },
});

export const shimmerAnimation = recipe({
    base: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '150px',
        height: '100%',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
    },
    variants: {
        direction: {
            'left-to-right': {
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: `1.5s infinite ${shimmerLeftToRight}`,
            },
            'right-to-left': {
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: `1.5s infinite ${shimmerRightToLeft}`,
            },
            'top-to-bottom': {
                width: '100%',
                height: '150px',
                background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: `1.5s infinite ${shimmerTopToBottom}`,
            },
            'bottom-to-top': {
                width: '100%',
                height: '150px',
                background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: `1.5s infinite ${shimmerBottomToTop}`,
            },
        },
    },
    defaultVariants: {
        direction: 'left-to-right',
    },
});
