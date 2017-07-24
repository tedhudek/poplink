'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congrats, your extension "poplink" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    // For next version consider an alternative to hardcoded values
    let disposable = vscode.commands.registerCommand('extension.poplink', () => {
        // The code you place here will be executed every time your command is executed

        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let path = editor.document.fileName;

        // Convert filename to URL
        let url=path.replace('c:\\repo\\drivers\\windows-driver-docs-pr\\','https://docs.microsoft.com/windows-hardware/drivers/');
        url=url.replace('\\','/')
        url=url.replace('.md','')

        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url))

    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}