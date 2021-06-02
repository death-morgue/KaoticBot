module.exports = options = (headless, start) => {
	
    const options = {
        sessionId: 'KaoticBot',
        headless: true,
        qrTimeout: 0,
        authTimeout: 0,
        restartOnCrash: start,
        cacheEnabled: false,
        useChrome: true,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
        chromiumArgs: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0',
            '--aggressive-cache-discard',
            '--disable-cache',
			'--disable-dev-profile'
        ]
    }
    return options
}