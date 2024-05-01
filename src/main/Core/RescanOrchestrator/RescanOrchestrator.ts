import type { EventEmitter } from "@Core/EventEmitter";
import type { SettingsManager } from "@Core/SettingsManager";
import type { TaskScheduler } from "@Core/TaskScheduler";

export class RescanOrchestrator {
    private static DefaultRescanDurationInSeconds = 300; // 5 minutes

    private cancellationToken?: NodeJS.Timeout = undefined;

    public constructor(
        private readonly eventEmitter: EventEmitter,
        private readonly settingsManager: SettingsManager,
        private readonly taskScheduler: TaskScheduler,
    ) {}

    public scanUntilCancelled(): void {
        this.eventEmitter.emitEvent("RescanOrchestrator:timeElapsed");

        this.cancellationToken = this.taskScheduler.scheduleTask(
            () => this.scanUntilCancelled(),
            this.getRescanDurationInSeconds() * 1000,
        );
    }

    public cancel(): void {
        if (this.cancellationToken) {
            this.taskScheduler.abortTask(this.cancellationToken);
        }
    }

    private getRescanDurationInSeconds(): number {
        const rescanDurationInSeconds = this.settingsManager.getValue(
            "general.rescanIntervalInSeconds",
            RescanOrchestrator.DefaultRescanDurationInSeconds,
        );

        return rescanDurationInSeconds < 10
            ? RescanOrchestrator.DefaultRescanDurationInSeconds
            : rescanDurationInSeconds;
    }
}
