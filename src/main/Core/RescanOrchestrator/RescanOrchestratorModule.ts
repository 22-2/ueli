import type { Dependencies } from "@Core/Dependencies";
import type { DependencyRegistry } from "@Core/DependencyRegistry";
import { RescanOrchestrator } from "./RescanOrchestrator";

export class RescanOrchestratorModule {
    public static bootstrap(dependencyRegistry: DependencyRegistry<Dependencies>): void {
        const rescanOrchestrator = new RescanOrchestrator(
            dependencyRegistry.get("EventEmitter"),
            dependencyRegistry.get("SettingsManager"),
            dependencyRegistry.get("TaskScheduler"),
        );

        rescanOrchestrator.scanUntilCancelled();

        // TODO: subscribe to rescan duration change event
        // const eventSubscriber = dependencyRegistry.get("EventSubscriber");
        // eventSubscriber.subscribe()
    }
}
