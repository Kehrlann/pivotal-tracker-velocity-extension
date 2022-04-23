import * as browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
  console.log("installed !")
})

browser.runtime.onStartup.addListener(() => {
  console.log("started")
})
