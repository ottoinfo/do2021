const Template = (html) => {
    return (`
        <!DOCTYPE html>
        <html>
        <head>
            <title>ottoinfo</title>
            <link rel='icon' type='image/png' href='/node.png'>
        </head>
        <body>
            ${html}
        </body>
        </html>
    `)
}

module.exports = Template