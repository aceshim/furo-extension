chrome.storage.sync.get('platforms', ({ platforms: selected }) => {
  // just in case
  if (!selected || selected.length) return;

  // filter url contains keywords like login, signup, auth, etc.

  // select all elements
  var elements = document.getElementsByTagName('*');
  elements = Array.from(elements);

  // filter DOM elements to remove
  let arr = selected.map((key) =>
    elements
      .filter((span) => {
        String(
          document.defaultView.getComputedStyle(span, null).backgroundColor
        ) == platforms[key]; // kakao
      })
      .reduce((a, b) => {
        a.append(b);
      })
  );

  // remove them
  arr.forEach((span) => {
    span.style.display = 'none';
  });
});

const platforms = {
  kakao: 'rgb(255, 236, 0)',
};
