const webApiUrl = "/api/";

class ApiService {
    get = async (endpoint, urlParams) => {
        const options = {
            method: "GET",
        }
        // URLSearchParams object available in urlParams
        const request = new Request(webApiUrl+endpoint, options);
        const response = await fetch(request);
        return response.json();
    }
    // post = async (endpoint, model) => {
    //     const headers = new Headers();
    //     headers.append("Content-Type", "application/json");
    //     var options = {
    //         method: "POST",
    //         headers,
    //         body: JSON.stringify(model)
    //     }
    //     const request = new Request(webApiUrl+endpoint, options);
    //     const response = await fetch(request);
    //     return response;
    // }
}
export default ApiService;