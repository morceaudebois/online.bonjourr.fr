console.time('storage.sync')

let sync

chrome.storage.sync.get(null, (data) => {
	sync = { ...data }
	console.timeEnd('storage.sync')
})
