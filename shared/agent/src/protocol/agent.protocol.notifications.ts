"use strict";
import { NotificationType, TextDocumentIdentifier } from "vscode-languageserver-protocol";
import { LoginSuccessResponse } from "./agent.protocol.auth";
import { CodemarkPlus } from "./agent.protocol.codemarks";
import { ThirdPartyProviders } from "./agent.protocol.providers";
import {
	CSLastReads,
	CSMarker,
	CSMarkerLocations,
	CSMePreferences,
	CSPost,
	CSRepository,
	CSStream,
	CSTeam,
	CSUser
} from "./api.protocol";

export enum ConnectionStatus {
	Disconnected = "disconnected",
	Reconnected = "reconnected",
	Reconnecting = "reconnecting"
}

export interface DidChangeConnectionStatusNotification {
	reset?: boolean;
	status: ConnectionStatus;
}

export const DidChangeConnectionStatusNotificationType = new NotificationType<
	DidChangeConnectionStatusNotification,
	void
>("codestream/didChangeConnectionStatus");

export enum ChangeDataType {
	Codemarks = "codemarks",
	MarkerLocations = "markerLocations",
	Markers = "markers",
	Posts = "posts",
	Preferences = "preferences",
	Repositories = "repos",
	Streams = "streams",
	Teams = "teams",
	Unreads = "unreads",
	Users = "users",
	Providers = "providers"
}

export interface CodemarksChangedNotification {
	type: ChangeDataType.Codemarks;
	data: CodemarkPlus[];
}

export interface MarkerLocationsChangedNotification {
	type: ChangeDataType.MarkerLocations;
	data: CSMarkerLocations[];
}

export interface MarkersChangedNotification {
	type: ChangeDataType.Markers;
	data: CSMarker[];
}

export interface PostsChangedNotification {
	type: ChangeDataType.Posts;
	data: CSPost[];
}

export interface PreferencesChangedNotification {
	type: ChangeDataType.Preferences;
	data: CSMePreferences;
}

export interface RepositoriesChangedNotification {
	type: ChangeDataType.Repositories;
	data: CSRepository[];
}

export interface StreamsChangedNotification {
	type: ChangeDataType.Streams;
	data: CSStream[];
}

export interface TeamsChangedNotification {
	type: ChangeDataType.Teams;
	data: CSTeam[];
}

export interface Unreads {
	lastReads: CSLastReads;
	mentions: { [streamId: string]: number };
	unreads: { [streamId: string]: number };
	totalMentions: number;
	totalUnreads: number;
}

export interface UnreadsChangedNotification {
	type: ChangeDataType.Unreads;
	data: Unreads;
}

export interface UsersChangedNotification {
	type: ChangeDataType.Users;
	data: CSUser[];
}

export interface ProvidersChangedNotification {
	type: ChangeDataType.Providers;
	data: ThirdPartyProviders;
}

export type DidChangeDataNotification =
	| CodemarksChangedNotification
	| MarkerLocationsChangedNotification
	| MarkersChangedNotification
	| PostsChangedNotification
	| PreferencesChangedNotification
	| RepositoriesChangedNotification
	| StreamsChangedNotification
	| TeamsChangedNotification
	| UnreadsChangedNotification
	| UsersChangedNotification
	| ProvidersChangedNotification;

export const DidChangeDataNotificationType = new NotificationType<DidChangeDataNotification, void>(
	"codestream/didChangeData"
);

export interface DidChangeDocumentMarkersNotification {
	textDocument: TextDocumentIdentifier;
	reason: "document" | "codemarks";
}

export const DidChangeDocumentMarkersNotificationType = new NotificationType<
	DidChangeDocumentMarkersNotification,
	void
>("codestream/didChangeDocumentMarkers");

export enum VersionCompatibility {
	Compatible = "ok",
	CompatibleUpgradeAvailable = "outdated",
	CompatibleUpgradeRecommended = "deprecated",
	UnsupportedUpgradeRequired = "incompatible",
	Unknown = "unknownVersion"
}

export interface DidChangeVersionCompatibilityNotification {
	compatibility: VersionCompatibility;
	downloadUrl: string;
	version: string | undefined;
}

export const DidChangeVersionCompatibilityNotificationType = new NotificationType<
	DidChangeVersionCompatibilityNotification,
	void
>("codestream/didChangeVersionCompatibility");

export enum LogoutReason {
	Token = "token",
	Unknown = "unknown",
	UnsupportedVersion = "unsupportedVersion"
}

export interface DidLogoutNotification {
	reason: LogoutReason;
}

export const DidLogoutNotificationType = new NotificationType<DidLogoutNotification, void>(
	"codestream/didLogout"
);

export interface DidLoginNotification {
	data: LoginSuccessResponse;
}
export const DidLoginNotificationType = new NotificationType<DidLoginNotification, void>(
	"codestream/didLogin"
);

export const DidStartLoginNotificationType = new NotificationType<void, void>(
	"codestream/didStartLogin"
);

export const DidFailLoginNotificationType = new NotificationType<void, void>(
	"codestream/didFailLogin"
);
