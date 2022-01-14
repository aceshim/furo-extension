/*global chrome*/

export const removeOAuth = async () => {
  chrome.storage.sync.set({ platform: 'kakao' }, () => {});

  await chrome.tabs.query({ active: true, currentWindow: true }, (r) => {
    chrome.tabs.executeScript(
      r[0].id,
      { file: 'scripts/removeOAuth.js' },
      function () {
        if (chrome.runtime.lastError) {
          console.error(
            'Script injection failed: ' + chrome.runtime.lastError.message
          );
        }
      }
    );
  });
};
