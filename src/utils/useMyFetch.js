export const request = (url,payload,METHOD = 'GET',api_url) => {
	const token = useCookie('token');
	let header = {}
	
	if(token) {
		header.authorization = `Bearer ${token.value}`;
	}
	

	const config = useFetch(url, {
		server: true,
		method: METHOD,
		params: METHOD === 'GET' ? payload: null,
		body: METHOD === 'POST' ? payload: null,
		baseURL: api_url, // 接口地址
		headers: header,
		async onRequest({ request, options }) {
			// fetch request
		},
		async onRequestError({ request, options, error }) {
			console.log("[fetch request error onRequestError]", error);
		},
		async onResponse({ request, response, options }) {
			// fetch response
		},
		async onResponseError({ request, response, options }) {
			console.log("[fetch response error onResponseError]", error);
		},
	});

	const { data } = config;
  return new Promise((res) => res(data.value));
};