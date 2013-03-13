linkhere
========

Chrome extension that finds appropriate fragment identifiers for linking.

If you want to send someone a link to a particular place on a long page,
choose ``Copy Link To Here'' from the context menu. This copies a link
with a fragment identifier that points at the document node with an ID
that directly precedes the thing you've clicked.

Obviously, this won't work if the elements with IDs are sparse on the page,
but then you won't be able to do anything about that without manipulating
what the browser the link is opened in sees (either by having an extension
there or by pointing the link at a mirror of the actual page).
