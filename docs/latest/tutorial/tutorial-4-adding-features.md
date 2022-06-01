---
title: 'Application Features'
description: 'In this step of the tutorial we will share some resources you should read to add features to your application'
slug: tutorial-adding-features
hide_title: false
---

:::info Follow along the tutorial

This is **part 4** of the Electron tutorial.

1. [Prerequisites][prerequisites]
1. [Building your First App][building your first app]
1. [Using Preload Scripts][main-renderer]
1. [Adding Features][features]
1. [Packaging Your Application][packaging]
1. [Publishing and Updating][updates]

:::

If you have been following the tutorial, you should have an Electron application
with a basic user interface. In this step, you will be using Electron APIs
to give a more native feel to your app and extend its functionality.

## Managing your application's window lifecycle

Application windows behave differently on each operating system. Electron puts the
responsibility on developers to implement these conventions in their app.

In general, you can use the `process` global's [`platform`][node-platform] attribute
to run code specifically for certain operating systems.

### Quit the app when all windows are closed (Windows & Linux)

On Windows and Linux, exiting all windows generally quits an application entirely.

To implement this, listen for the `app` module's [`'window-all-closed'`][window-all-closed]
event, and call [`app.quit()`][app-quit] if the user is not on macOS (`darwin`).

```js
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
```

### Open a window if none are open (macOS)

Whereas Linux and Windows apps quit when they have no windows open, macOS apps generally
continue running even without any windows open. Activating the app when no windows
are available should open a new one.

To implement this feature, listen for the `app` module's [`activate`][activate]
event, and call your existing `createWindow()` method if no browser windows are open.

Because windows cannot be created before the `ready` event, you should only listen for
`activate` events after your app is initialized. Do this by attaching your event listener
from within your existing `whenReady()` callback.

```js
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
```

All your code should be similar to this:

```fiddle docs/latest/fiddles/windows-lifecycle

```

## Other integrations and How to's

To help you with more advanced topics and deeper OS integration, we have created some tutorials.
You can access them by clicking the links below:

- [OS Integration]: How to make your application feel more integrated with the Operating
  System where it is running.
- [How to]: A list of more advanced topics that are general to Electron development and
  not for a particular operating system.

:::tip Let us know if something is missing!

If you can't find what you are looking for, please let us know on our [GitHub repo] or in
our [Discord server][discord]!

:::

<!-- Link labels -->

[activate]: latest/api/app.md#event-activate-macos
[app-quit]: latest/api/app.md#appquit
[discord]: https://discord.com/invite/APGC3k5yaH
[github repo]: https://github.com/electron/electronjs.org-new/issues/new
[how to]: ./examples.md
[node-platform]: https://nodejs.org/api/process.html#process_process_platform
[os integration]: ./os-integration.md
[window-all-closed]: latest/api/app.md#event-window-all-closed

<!-- Tutorial links -->

[prerequisites]: tutorial-1-prerequisites.md
[building your first app]: tutorial-2-scaffolding.md
[main-renderer]: tutorial-3-main-renderer.md
[features]: tutorial-4-adding-features.md
[packaging]: tutorial-5-packaging.md
[updates]: tutorial-6-publishing-updating.md
