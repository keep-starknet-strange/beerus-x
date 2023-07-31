chrome.runtime.onInstalled.addListener(() => {
  console.log("init service worker...");
  // runDemo();
});

// importScripts('./wasm/pkg/beerus.js');
// async function runDemo() {
  // console.log("run WASM here...");
  // Initialize the WASM module(BROKEN)
  // await wasm_bindgen('./wasm/pkg/beerus_js_bg.wasm');

  // wasm_bindgen.print_with_value('John');
// }
