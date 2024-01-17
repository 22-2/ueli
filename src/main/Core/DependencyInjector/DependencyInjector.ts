import type { DependencyInjector as DependencyInjectorInterface } from "./Contract";
import type { Dependencies, DependencyName } from "./Dependencies";

export class DependencyInjector implements DependencyInjectorInterface {
    private dependencies: Dependencies = {
        ActionHandlerRegistry: undefined,
        App: undefined,
        AssetPathResolver: undefined,
        Clipboard: undefined,
        Clock: undefined,
        CommandlineUtility: undefined,
        Dialog: undefined,
        Emitter: undefined,
        EventEmitter: undefined,
        EventSubscriber: undefined,
        ExtensionCacheFolder: undefined,
        ExtensionRegistry: undefined,
        FileSystemUtility: undefined,
        GlobalShortcut: undefined,
        IpcMain: undefined,
        Logger: undefined,
        NativeTheme: undefined,
        Net: undefined,
        OperatingSystem: undefined,
        Platform: undefined,
        PowershellUtility: undefined,
        RandomStringProvider: undefined,
        SafeStorage: undefined,
        SafeStorageEncryption: undefined,
        SearchIndex: undefined,
        SettingsFile: undefined,
        SettingsManager: undefined,
        SettingsReader: undefined,
        SettingsWriter: undefined,
        Shell: undefined,
        SystemPreferences: undefined,
        Translator: undefined,
        UeliCommandInvoker: undefined,
    };

    public registerInstance<Name extends DependencyName>(name: Name, instance: Dependencies[Name]): void {
        this.dependencies[name] = instance;
    }

    public getInstance<Name extends DependencyName>(name: Name): Dependencies[Name] {
        if (!this.dependencies[name]) {
            throw new Error(`Instance with name "${name}" not found`);
        }

        return this.dependencies[name];
    }
}
