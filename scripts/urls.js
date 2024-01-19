const absoluteUrl = (path = '') =>
    `http://ducin.it${path.length > 0 ? `/${path}` : ''}`

module.exports = {
    absoluteUrl
}
