import swal from 'sweetalert'
var Plugins = {
    showalert: function (title, icon, button) {
        swal({
            title: title,
            icon: icon,
            button: button
        })
    },
    validateemail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    },
    parseJwt: function (token) {
        var base64Url = token.split('.')[1]
        var base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))

        return JSON.parse(base64)
    },
    urlParse: function (value, type) {
        var dizi = []
        var param = value.split('&')
        param.forEach(function (row, index) {
            if (row.indexOf('=') > 0) {
                var value = row.split('=')

                dizi.push({
                    PropertyName: value[0],
                    Operation: value[1].split(',').length > 1 ? 'IN' : 'EQ',
                    PropertyValue: value[1]
                })
            } else if (row.indexOf('<') > 0) {
                var value = row.split('<')
                dizi.push({
                    PropertyName: value[0],
                    Operation: 'LT',
                    PropertyValue: value[1]
                })
            } else if (row.indexOf('>') > 0) {
                var value = row.split('>')
                dizi.push({
                    PropertyName: value[0],
                    Operation: 'GT',
                    PropertyValue: value[1]
                })
            } else if (row.indexOf('%') > 0) {
                var value = row.split('%')
                dizi.push({
                    PropertyName: value[0],
                    Operation: 'CT',
                    PropertyValue: value[1]
                })
            } else if (row.indexOf('-') > 0) {
                var value = row.split('-')
                dizi.push({
                    PropertyName: value[0],
                    Operation: 'NE',
                    PropertyValue: value[1]
                })
            } else if (row.indexOf('!') > 0) {
                var value = row.split('!')
                if (type == 'N') {
                    value[1] = parseFloat(value[1])
                }
            }
        })
        return dizi
    },


}
export default Plugins
