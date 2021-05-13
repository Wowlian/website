module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'get-started/quick-start',
        'get-started/installation',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/accessibility',
        'development/using-native-node-modules',
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      items: [
        'performance/performance',
        'performance/message-ports',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/context-isolation',
        'security/security',
      ],
    },
    {
      type: 'category',
      label: 'Distribution',
      items: [
        'distribution/code-signing',
        'distribution/mac-app-store-submission-guide',
        'distribution/windows-store-guide',
        'distribution/snapcraft',
        'distribution/application-distribution',
      ],
    },
    {
      type: 'category',
      label: 'Testing And Debugging',
      items: [
        'testing-and-debugging/using-selenium-and-webdriver',
        'testing-and-debugging/debugging-main-process',
        'testing-and-debugging/debugging-vscode',
        'testing-and-debugging/devtools-extension',
        'testing-and-debugging/application-debugging',
        'testing-and-debugging/automated-testing-with-a-custom-driver',
        'testing-and-debugging/testing-on-headless-ci',
        'testing-and-debugging/testing-widevine-cdm',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'how-to/examples',
        'how-to/dark-mode',
        'how-to/desktop-environment-integration',
        'how-to/fuses',
        'how-to/in-app-purchases',
        'how-to/keyboard-shortcuts',
        'how-to/linux-desktop-actions',
        'how-to/macos-dock',
        'how-to/multithreading',
        'how-to/native-file-drag-drop',
        'how-to/notifications',
        'how-to/offscreen-rendering',
        'how-to/online-offline-events',
        'how-to/progress-bar',
        'how-to/recent-documents',
        'how-to/repl',
        'how-to/represented-file',
        'how-to/spellchecker',
        'how-to/updates',
        'how-to/using-pepper-flash-plugin',
        'how-to/web-embeds',
        'how-to/windows-arm',
        'how-to/windows-taskbar',
        'how-to/sandbox',
      ],
    },
    {
      type: 'category',
      label: 'Internals',
      items: [
        'internals/electron-vs-nwjs',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/boilerplates-and-clis',
        'resources/breaking-changes',
        'resources/electron-timelines',
        'resources/electron-versioning',
        'resources/faq',
        'resources/glossary',
        'resources/support',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/README',
        'contributing/azure-vm-setup',
        'contributing/build-instructions-gn',
        'contributing/build-instructions-linux',
        'contributing/build-instructions-macos',
        'contributing/build-instructions-windows',
        'contributing/build-system-overview',
        'contributing/chromium-development',
        'contributing/clang-format',
        'contributing/clang-tidy',
        'contributing/coding-style',
        'contributing/debug-instructions-windows',
        'contributing/debugging-instructions-macos',
        'contributing/debugging-instructions-macos-xcode',
        'contributing/goma',
        'contributing/issues',
        'contributing/patches',
        'contributing/pull-requests',
        'contributing/setting-up-symbol-server',
        'contributing/source-code-directory-structure',
        'contributing/testing',
        'contributing/v8-development',
      ],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'Main Process Modules',
      items: [
        'api/app',
        'api/auto-updater',
        'api/browser-view',
        'api/browser-window',
        'api/clipboard',
        'api/content-tracing',
        'api/crash-reporter',
        'api/desktop-capturer',
        'api/dialog',
        'api/dock',
        'api/global-shortcut',
        'api/in-app-purchase',
        'api/ipc-main',
        'api/menu',
        'api/native-theme',
        'api/net',
        'api/net-log',
        'api/notification',
        'api/power-monitor',
        'api/power-save-blocker',
        'api/process',
        'api/protocol',
        'api/screen',
        'api/session',
        'api/shell',
        'api/system-preferences',
        'api/touch-bar',
        'api/tray',
        'api/web-contents',
        'api/web-frame-main',
      ],
    },
    {
      type: 'category',
      label: 'Renderer Process Modules',
      items: [
        'api/clipboard',
        'api/context-bridge',
        'api/crash-reporter',
        'api/desktop-capturer',
        'api/ipc-renderer',
        'api/web-frame',
      ],
    },
    {
      type: 'category',
      label: 'Custom DOM Elements',
      items: [
        'api/browser-window-proxy',
        'api/file-object',
        'api/webview-tag',
        'api/window-open',
      ],
    },
    {
      type: 'category',
      label: 'API Structures',
      items: [
        'api/structures/bluetooth-device',
        'api/structures/certificate',
        'api/structures/certificate-principal',
        'api/structures/cookie',
        'api/structures/cpu-usage',
        'api/structures/crash-report',
        'api/structures/custom-scheme',
        'api/structures/desktop-capturer-source',
        'api/structures/display',
        'api/structures/event',
        'api/structures/extension',
        'api/structures/extension-info',
        'api/structures/file-filter',
        'api/structures/file-path-with-headers',
        'api/structures/gpu-feature-status',
        'api/structures/input-event',
        'api/structures/io-counters',
        'api/structures/ipc-main-event',
        'api/structures/ipc-main-invoke-event',
        'api/structures/ipc-renderer-event',
        'api/structures/jump-list-category',
        'api/structures/jump-list-item',
        'api/structures/keyboard-event',
        'api/structures/keyboard-input-event',
        'api/structures/memory-info',
        'api/structures/memory-usage-details',
        'api/structures/mime-typed-buffer',
        'api/structures/mouse-input-event',
        'api/structures/mouse-wheel-input-event',
        'api/structures/new-window-web-contents-event',
        'api/structures/notification-action',
        'api/structures/notification-response',
        'api/structures/point',
        'api/structures/post-body',
        'api/structures/post-data',
        'api/structures/printer-info',
        'api/structures/process-memory-info',
        'api/structures/process-metric',
        'api/structures/product',
        'api/structures/protocol-request',
        'api/structures/protocol-response',
        'api/structures/protocol-response-upload-data',
        'api/structures/rectangle',
        'api/structures/referrer',
        'api/structures/scrubber-item',
        'api/structures/segmented-control-segment',
        'api/structures/serial-port',
        'api/structures/service-worker-info',
        'api/structures/shared-worker-info',
        'api/structures/sharing-item',
        'api/structures/shortcut-details',
        'api/structures/size',
        'api/structures/task',
        'api/structures/thumbar-button',
        'api/structures/trace-categories-and-options',
        'api/structures/trace-config',
        'api/structures/transaction',
        'api/structures/upload-data',
        'api/structures/upload-file',
        'api/structures/upload-raw-data',
        'api/structures/web-source',
      ],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items: [
        'api/accelerator',
        'api/client-request',
        'api/cookies',
        'api/debugger',
        'api/download-item',
        'api/environment-variables',
        'api/experimental',
        'api/extensions',
        'api/frameless-window',
        'api/incoming-message',
        'api/menu-item',
        'api/message-channel-main',
        'api/message-port-main',
        'api/native-image',
        'api/service-workers',
        'api/share-menu',
        'api/touch-bar-button',
        'api/touch-bar-color-picker',
        'api/touch-bar-group',
        'api/touch-bar-label',
        'api/touch-bar-other-items-proxy',
        'api/touch-bar-popover',
        'api/touch-bar-scrubber',
        'api/touch-bar-segmented-control',
        'api/touch-bar-slider',
        'api/touch-bar-spacer',
        'api/web-request',
        'api/command-line-switches',
        'api/command-line',
      ],
    },
  ],
};
