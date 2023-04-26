import { lazy, Suspense } from 'react'

import { Skeleton } from '@/shared/ui/Skeleton'

import { ArticleRatingProps } from './ProfileRating'

const ArticleRatingLazy = lazy(
    async () => await import('./ProfileRating')
)

export const ProfileRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={140}/>}>
            <ArticleRatingLazy {...props}/>
        </Suspense>
    )
}
