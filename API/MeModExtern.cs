using System;
using System.Runtime.InteropServices;

namespace API;

public static class MeModExternConsole {

    [DllImport("kernel32.dll")]
    public static extern Boolean AllocConsole();

    [DllImport("kernel32.dll")]
    public static extern Boolean FreeConsole();

    [DllImport("kernel32.dll")]
    public static extern Boolean AttachConsole(Int32 ProcessId);

    [DllImport("user32.dll")]
    public static extern IntPtr FindWindow(string lpClassName, string lpWindowName);
    [DllImport("user32.dll")]
    static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
    public static void SetConsoleWindowVisibility(bool visible)
    {
        IntPtr hWnd = FindWindow(null, Console.Title);
        if(hWnd != IntPtr.Zero) {
            if(visible)
                ShowWindow(hWnd, 1); //1 = SW_SHOWNORMAL           
            else
                ShowWindow(hWnd, 0); //0 = SW_HIDE               
        }
    }
}
