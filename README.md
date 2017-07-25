# popLink

Many modern publishing platforms build Markdown into HTML for publication on a website.  In such a platform, it can be useful to open the rendered web page while editing the Markdown source file.

Poplink converts the file path of the currently opened file into an expected URL and then opens the target page in the default web browser.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example, you would like popLink to convert local paths like `C:\repo\drivers\windows-driver-docs-pr\develop\getting-started-with-universal-drivers.md` to `https://docs.microsoft.com/windows-hardware/drivers/develop/getting-started-with-universal-drivers`.  To do so, go into user settings in VS Code and add:

* ``: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

* `popLink.localBasePath`: "c:\\repo\\drivers\\windows-driver-docs-pr\\",
* `popLink.remoteBasePath`:"https://docs.microsoft.com/windows-hardware/drivers/"

The extension replaces the front end of the local path with the URL base you provide, changes backslashes to forward slashes, removes the `.md` suffix, and presto change-o you have a URL.

We recommend binding the command to a hotkey.  Press F1 and choose `Preferences: Open Keyboard Shortcuts File` and add a block like this:

```
 { "key": "f10", 
  "command": "extension.poplink",
 "when": "editorFocus" },
 ```
 
**Pro Tip**: Use the `Preferences: Open Keyboard Shortcuts` search bar to find a free hotkey.

## Release Notes

Created for the Microsoft Hackathon 2017.

### 1.0.0

Initial release.
