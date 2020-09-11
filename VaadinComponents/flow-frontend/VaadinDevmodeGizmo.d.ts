import { LitElement } from 'lit-element';
export declare class VaadinDevmodeGizmo extends LitElement {
    static get styles(): import("lit-element").CSSResult;
    static DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE: string;
    static ACTIVE_KEY_IN_SESSION_STORAGE: string;
    static TRIGGERED_KEY_IN_SESSION_STORAGE: string;
    static TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE: string;
    static AUTO_DEMOTE_NOTIFICATION_DELAY: number;
    static HOTSWAP_AGENT: string;
    static JREBEL: string;
    static SPRING_BOOT_DEVTOOLS: string;
    static BACKEND_DISPLAY_NAME: Record<string, string>;
    static get isActive(): boolean;
    static notificationDismissed(persistentId: string): boolean;
    url?: string;
    backend?: string;
    springBootLiveReloadPort?: number;
    expanded: boolean;
    messages: Message[];
    splashMessage?: string;
    notifications: Message[];
    frontendStatus: ConnectionStatus;
    javaStatus: ConnectionStatus;
    javaConnection?: Connection;
    frontendConnection?: Connection;
    nextMessageId: number;
    disableEventListener?: EventListener;
    transitionDuration: number;
    constructor();
    openWebSocketConnection(): void;
    getDedicatedWebSocketUrl(): string | undefined;
    getSpringBootWebSocketUrl(location: any): string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    toggleExpanded(): void;
    showSplashMessage(msg: string | undefined): void;
    demoteSplashMessage(): void;
    showMessage(type: MessageType, message: string, details?: string, link?: string): void;
    showNotification(type: MessageType, message: string, details?: string, link?: string, persistentId?: string): void;
    dismissNotification(id: number): void;
    findNotificationIndex(id: number): number;
    toggleDontShowAgain(id: number): void;
    setActive(yes: boolean): void;
    getStatusColor(status: ConnectionStatus | undefined): "none" | "var(--gizmo-green-color)" | "var(--gizmo-grey-color)" | "var(--gizmo-yellow-color)" | "var(--gizmo-red-color)";
    renderMessage(messageObject: Message): import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
}
declare enum ConnectionStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    UNAVAILABLE = "unavailable",
    ERROR = "error"
}
declare class Connection extends Object {
    static HEARTBEAT_INTERVAL: number;
    status: ConnectionStatus;
    webSocket?: WebSocket;
    constructor(url?: string);
    onHandshake(): void;
    onReload(): void;
    onConnectionError(_: string): void;
    onStatusChange(_: ConnectionStatus): void;
    handleMessage(msg: any): void;
    handleError(msg: any): void;
    setActive(yes: boolean): void;
    setStatus(status: ConnectionStatus): void;
}
declare enum MessageType {
    LOG = "log",
    INFORMATION = "information",
    WARNING = "warning",
    ERROR = "error"
}
interface Message {
    id: number;
    type: MessageType;
    message: string;
    details?: string;
    link?: string;
    persistentId?: string;
    dontShowAgain: boolean;
    deleted: boolean;
}
export {};
