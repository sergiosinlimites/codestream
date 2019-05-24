﻿namespace CodeStream.VisualStudio.Core {
	public static class Process {
		public static bool IsVisualStudioProcess() =>
			System.Diagnostics.Process.GetCurrentProcess().ProcessName == "devenv";
	}
}
