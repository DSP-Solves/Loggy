const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log("Loggy at your service :D");

	let disposable = vscode.commands.registerCommand(
		"loggy.helloWorld",
		function () {
			vscode.window.showInformationMessage("Loggy at your service :D");
		}
	);

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
