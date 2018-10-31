"use strict"

const showdown = require("showdown")
const converter = new showdown.Converter()

module.exports = {
  async convert(path, type = null) {
    return new Promise(async (resolve, reject) => {
      try {
        const xmlhttp = new XMLHttpRequest()
        await xmlhttp.open("get", path, false)
        await xmlhttp.send()
        if (type === "html") {
          const markdown = converter.makeHtml(xmlhttp.responseText)
          resolve(markdown)
        } else {
          resolve(xmlhttp.responseText)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}
