var CONTEXT_MENU_COMMANDS = ['Entry A', 'Entry B', 'Entry C']
var built = false

function setUpContextMenu()
{
  built = true
  chrome.contextMenus.removeAll(function() {
    CONTEXT_MENU_COMMANDS.forEach(function(commandId) {
      console.log(chrome.contextMenus)
      chrome.contextMenus.create({
        title: commandId,
        id: commandId,
        contexts: ['all']
      })
    })
  })
}

chrome.contextMenus.onClicked.addListener(function(info) {
  if (!document.hasFocus()) {
    return
  }
})

onload = function() {
  setUpContextMenu();
}

onfocus = function() {
  if ( !built )
    setUpContextMenu();
}