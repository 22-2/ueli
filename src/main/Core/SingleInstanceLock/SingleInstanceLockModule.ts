import type { Dependencies } from "@Core/Dependencies";
import type { DependencyRegistry } from "@Core/DependencyRegistry";

export class SingleInstanceLockModule {
    public static bootstrap(dependencyRegistry: DependencyRegistry<Dependencies>) {
        const eventEmitter = dependencyRegistry.get("EventEmitter");
        const app = dependencyRegistry.get("App");

        app.on("second-instance", () => {
            eventEmitter.emitEvent("hotkeyPressed");
        });
    }
}
