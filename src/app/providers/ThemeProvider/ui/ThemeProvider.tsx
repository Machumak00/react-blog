import React, {
    type FC,
    type ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const [isThemeMounted, setIsThemeMounted] = useState(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeMounted && initialTheme) {
            setTheme(initialTheme);
            setIsThemeMounted(true);
        }
    }, [initialTheme, isThemeMounted]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
