# AngularJS_Authentication

Simple authentication service with API and token.

## Quick start

* At the first you need make endpoints with your API (!!!)
* Update paths in loginFactory.js
* Update your prefix header in loginService.js

```
# Update paths to your API (loginFactory.js)

$http.post('http://localhost:8000/api-token-auth/', udata)  						// LoginReqFactory

$http.post('http://localhost:8000/api-token-verify/', {token:data.token})		    // VerifyTokenFactory

$http.post('http://localhost:8000/api-token-refresh/', {token:data.token})         	// RefreshTokenFactory

# Update your prefix header (loginService.js)

$http.defaults.headers.common.Authotization = 'JWT ' + resp; 						// Your Prefix Header;
```

* Start your API and check in browser login page

## Authors

* **pvpasha** - *Initial work*

## License

This project is licensed under the BSD License - see the 
[LICENSE](LICENSE) file for details
