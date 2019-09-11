const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js');
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['session_control'] = require('..\\middleware\\session_control.js');
middleware['session_control'] = middleware['session_control'].default || middleware['session_control']

export default middleware
