import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // Для теста загрузки и лоадера
    setTimeout(() => { resolve(import('./AboutPage')) }, 2000)
}))
