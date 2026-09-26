import { useEffect } from 'react';

const DEFAULT_TITLE = 'MaddeStudio | Ideas Made Material';

// Deep links arrive with a page-specific <title> (see vite.config.ts);
// keep the tab title in sync while navigating inside the app.
export const usePageTitle = (title?: string) => {
    useEffect(() => {
        document.title = title ? `${title} | Madde Studio` : DEFAULT_TITLE;
        return () => { document.title = DEFAULT_TITLE; };
    }, [title]);
};
