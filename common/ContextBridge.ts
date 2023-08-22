import { SearchResultItem } from "./SearchResultItem";

export type ContextBridge = {
    getSearchResultItems: () => SearchResultItem[];
    onNativeThemeChanged: (callback: () => void) => void;
    onSearchIndexUpdated: (callback: () => void) => void;
    getSettingByKey: <T>(key: string, defaultValue: T) => T;
    updateSettingByKey: <T>(key: string, value: T) => Promise<void>;
    themeShouldUseDarkColors: () => boolean;
};
