import { StoryFn } from '@storybook/react'
import { Suspense } from 'react'

export const SuspenseDecorator = (StoryComponent: StoryFn) => {
    return (
        <Suspense>
            <StoryComponent/>
        </Suspense>
    )
}
