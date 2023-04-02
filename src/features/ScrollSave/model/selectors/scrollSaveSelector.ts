import { type StateSchema } from 'app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import path from 'path'

export const getScrollSave = (state: StateSchema) => state.scrollSave.scroll
export const getScrollSaveByPath = createSelector(
    getScrollSave,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)
