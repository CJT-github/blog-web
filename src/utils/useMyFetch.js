export const request = (url,payload,METHOD = 'GET',api_url) => {
	const runtimeConfig = useRuntimeConfig();
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
  return useFetch(url, {
		method: METHOD,
		...requestOpt,
		baseURL: api_url, // 接口地址
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
};