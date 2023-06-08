import React, {
    type FC,
    type ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeMounted, setIsThemeMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeMounted && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeMounted(true);
        }
    }, [defaultTheme, isThemeMounted]);

    useEffect(() => {
        document.body.className = theme;
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
