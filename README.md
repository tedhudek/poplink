# Poplink extension for VS Code

Many modern publishing platforms build Markdown into HTML for publication on a website. When editing a Markdown source file in such a platform, it can be useful to open the corresponding web page.

Poplink converts the file path of the currently open Markdown file into an expected URL and opens that URL in the default web browser. Optionally, you can add a second local path to base URL mapping.

## Primary mapping

For example, say that a local path like this:

`C:\repo\drivers\windows-driver-docs-pr\develop\getting-started-with-windows-drivers.md`

...publishes to...

`https://docs.microsoft.com/windows-hardware/drivers/develop/getting-started-with-windows-drivers`

To convert from local path to URL, we need to replace everything before the `develop` folder with the URL base path.  To do this, paste this block into your VS Code `settings.json` file and then modify the directory names to match your configuration.

```
"popLink.localBasePath": "c:\\repo\\drivers\\windows-driver-docs-pr\\",
"popLink.remoteBasePath": "https://docs.microsoft.com/windows-hardware/drivers/"
```

## Secondary mapping

Poplink can also have an optional secondary mapping. For example, you might have an additional local path to remote URL mapping. Say that:

`c:\repo\wdk-reference\wdk-reference-src\content\wdm\nf-wdm-iocalldriver.md`

...publishes to...

`https://docs.microsoft.com/windows-hardware/drivers/ddi/wdm/nf-wdm-iocalldriver`

If you have such a secondary mapping, add the following lines to your `settings.json` and again update the directory names:

```
"popLink.localRefPath": "c:\\repo\\wdk-reference\\wdk-reference-src\\content\\",
"popLink.remoteRefPath": "https://docs.microsoft.com/windows-hardware/drivers/ddi/",
```

**Note**: The local paths are case-sensitive.  *Ensure that casing in the local path value(s) match the casing of the actual paths.*  Also note the double backslashes required in the local paths.

We recommend binding the `poplink` command to a hotkey. Press F1 and choose `Preferences: Open Keyboard Shortcuts File` and add a block like this:

```
 { "key": "ctrl+alt+p", 
  "command": "extension.poplink",
 "when": "editorFocus" },
 ```
 
**Pro Tip**: Use the `Preferences: Open Keyboard Shortcuts` search bar to find a free hotkey.

## Release Notes

Created for the Microsoft Hackathon 2017, secondary mapping added for Hackathon 2020.


