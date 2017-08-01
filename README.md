# popLink extension for VS Code

Many modern publishing platforms build Markdown into HTML for publication on a website. In such a platform, it can be useful to open the rendered web page while editing the Markdown source file.

Poplink converts the file path of the currently opened file into an expected URL and then opens the target page in the default web browser.

## Extension Settings

For example, say that local paths in your repo that look like this:

`C:\repo\drivers\windows-driver-docs-pr\develop\getting-started-with-universal-drivers.md`

...publish out to...

`https://docs.microsoft.com/windows-hardware/drivers/develop/getting-started-with-universal-drivers`

To convert from the local path to the URL, we need to remove everything before the `develop` folder and replace it with the URL base path.

To configure popLink to handle such a mapping, go into user settings and specify:

```
"popLink.localBasePath": "c:\\repo\\drivers\\windows-driver-docs-pr\\",
"popLink.remoteBasePath": "https://docs.microsoft.com/windows-hardware/drivers/"
```

**Note**: The local base path is case sensitive.  Ensure that casing in the local path value matches the casing of the actual path.  Also note the double backslashes required in the local path.

We recommend binding the `poplink` command to a hotkey. Press F1 and choose `Preferences: Open Keyboard Shortcuts File` and add a block like this:

```
 { "key": "f10", 
  "command": "extension.poplink",
 "when": "editorFocus" },
 ```
 
**Pro Tip**: Use the `Preferences: Open Keyboard Shortcuts` search bar to find a free hotkey.

## Release Notes

Created for the Microsoft Hackathon 2017.


