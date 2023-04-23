import { StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (StoryComponent: StoryFn) => {
    return (
        <BrowserRouter>
            <StoryComponent/>
        </BrowserRouter>
    )
}
