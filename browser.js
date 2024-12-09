chrome.bookmarks.getTree( tree => {
    const container = document.getElementById('container');
    displayBookmarks(tree[0].children, container);
});

function displayBookmarks (nodes, parentNode) {
    for (const node of nodes){
        // check if node is a bookmark
        if (node.url){
            const listItem = document.createElement('li');
            listItem.textContent = node.title;
            parentNode.appendChild(listItem);
        }
        // check if node is a folder
        if(node.children){
            const sublist = document.createElement('ul');
            parentNode.appendChild(sublist);
            displayBookmarks(node.children ,sublist);
        }
    }
}