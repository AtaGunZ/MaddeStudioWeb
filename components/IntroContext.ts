import { createContext, useContext } from 'react';

// Whether the opening loader has finished. The page is built behind the loader straight away (so
// its heavy first render never lands in the middle of the intro animation); the hero waits for
// this before playing, because its logo grows out of the loader's square.
export const IntroReady = createContext(true);
export const useIntroReady = () => useContext(IntroReady);
