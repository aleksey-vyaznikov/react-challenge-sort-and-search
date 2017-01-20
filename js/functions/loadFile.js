export default url => {

		return new Promise((success, fail) => {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.addEventListener('load', () => {
				xhr.status >= 200 && xhr.status < 400 ? success(xhr.responseText): fail(new Error(`Request Failed: ${xhr.statusText}`));
			});

			xhr.addEventListener('error', () => {
				fail(new Error('Network Error'));
			});
			xhr.send();
		});

};