import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const moveRight = vscode.commands.registerCommand('move-file-to-group.moveRight', () => {
		vscode.commands.executeCommand('workbench.action.moveEditorToRightGroup');
	});

	context.subscriptions.push(moveRight);

	const moveLeft = vscode.commands.registerCommand('move-file-to-group.moveLeft', () => {
		vscode.commands.executeCommand('workbench.action.moveEditorToLeftGroup');
	});

	context.subscriptions.push(moveLeft);

	const moveUp = vscode.commands.registerCommand('move-file-to-group.moveUp', () => {
		vscode.commands.executeCommand('workbench.action.moveEditorToAboveGroup');
	});

	context.subscriptions.push(moveUp);

	const moveDown = vscode.commands.registerCommand('move-file-to-group.moveDown', () => {
		vscode.commands.executeCommand('workbench.action.moveEditorToBelowGroup');
	});

	context.subscriptions.push(moveDown);
}

export function deactivate() {}
