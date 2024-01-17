import type * as CommonCore from "@common/Core";
import type * as Electron from "electron";
import type { Emitter } from "mitt";
import type * as Core from "..";

export type Dependencies = {
    ActionHandlerRegistry: Core.ActionHandlerRegistry | undefined;
    App: Electron.App | undefined;
    AssetPathResolver: Core.AssetPathResolver | undefined;
    Clipboard: Electron.Clipboard | undefined;
    Clock: Core.Clock | undefined;
    CommandlineUtility: Core.CommandlineUtility | undefined;
    Dialog: Electron.Dialog | undefined;
    Emitter: Emitter<Record<string, unknown>> | undefined;
    EventEmitter: Core.EventEmitter | undefined;
    EventSubscriber: Core.EventSubscriber | undefined;
    ExtensionCacheFolder: Core.ExtensionCacheFolder | undefined;
    ExtensionRegistry: Core.ExtensionRegistry | undefined;
    FileSystemUtility: Core.FileSystemUtility | undefined;
    GlobalShortcut: Electron.GlobalShortcut | undefined;
    IpcMain: Electron.IpcMain | undefined;
    Logger: Core.Logger | undefined;
    NativeTheme: Electron.NativeTheme | undefined;
    Net: Electron.Net | undefined;
    OperatingSystem: CommonCore.OperatingSystem | undefined;
    Platform: string | undefined;
    PowershellUtility: Core.PowershellUtility | undefined;
    RandomStringProvider: Core.RandomStringProvider | undefined;
    SafeStorage: Electron.SafeStorage | undefined;
    SafeStorageEncryption: Core.SafeStorageEncryption | undefined;
    SearchIndex: Core.SearchIndex | undefined;
    SettingsFile: Core.SettingsFile | undefined;
    SettingsManager: Core.SettingsManager | undefined;
    SettingsReader: Core.SettingsReader | undefined;
    SettingsWriter: Core.SettingsWriter | undefined;
    Shell: Electron.Shell | undefined;
    SystemPreferences: Electron.SystemPreferences | undefined;
    Translator: Core.Translator | undefined;
    UeliCommandInvoker: Core.UeliCommandInvoker | undefined;
};

export type DependencyName = keyof Dependencies;
