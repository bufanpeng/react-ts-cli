import axios from "axios";
const Axios = axios.create();
// 添加请求拦截器
Axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        const defaultCfg = {}
        const requestConfig = {
            ...defaultCfg,
            ...config
        }
        console.log(requestConfig)
        return requestConfig
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
Axios.interceptors.response.use(
    (response) => {
        // 根据自己业务自己扩展
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        // location.href = ErrorUrl
        return Promise.reject(error);
    }
);

const request = (obj: object) => {
    console.log(obj)
    return new Promise((resolve, reject) => {
        Axios(obj)
            .then((res) => {
                // 对响应数据做点什么, 自己扩展
                resolve(res)
            })
            .catch((err: any) => {
                // location.href = ErrorUrl
                reject(err);
            });
    });
};

export const GET = (GETDefaults: any) => {
    const obj = {
        method: 'GET',
        showError: true
    }
    
    const newObj = {
        ...obj,
        ...GETDefaults
    }
    return request(newObj)
};

export const POST = (POSTDefaults: any) => {
    const obj = {
        method: 'POST',
        showError: true,
    }
    const newObj = {
        ...obj,
        ...POSTDefaults
    }
    return request(newObj)
}
export const POSTFORM = (POSTDefaults: any) => {
    const obj = {
        method: 'POST',
        showError: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const newObj = {
        ...obj,
        ...POSTDefaults
    }
    return request(newObj)
}
