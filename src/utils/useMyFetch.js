export const request = (url,payload,METHOD = 'GET',api_url) => {
	const runtimeConfig = useRuntimeConfig();
	const token = useCookie('token');
	let requestOpt;

	if(METHOD === 'GET') {
		requestOpt = {
			params: {
				...payload
			}
		}
	}

	if(METHOD === 'POST') {
		requestOpt = {
			body: {
				...payload
			}
		}
	}

	const config = useFetch(url, {
		server: true,
		method: METHOD,
		...requestOpt,
		baseURL: api_url, // 接口地址
		headers: {
			Authorization: `Bearer ${token.value}`
		},
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
  return data.value;
};