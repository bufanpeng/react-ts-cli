import { POST } from "@/utils/request.ts";

// 示例
export const home = (params: object) => {
    return POST({ url: "/api/baidu.com", data:params})
}