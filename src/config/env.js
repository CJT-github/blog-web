import {product} from "./pro.js"
import {local} from "./local.js"


let env = process.env.NODE_ENV || "development";
let defaultData = local;

// 判断开发环境还是生产环境
if (env == "development") {
	defaultData = local;
} else if (env === "production") {
	defaultData = product;
}

export default {
	...defaultData,
};
