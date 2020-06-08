export const JWT_SECRET = 'glasssix';  // jwt 秘钥
export const NO_AUTH_PATH = {
  path: [/\/user\/find/,/\/user\/login/] // 公共接口，jwt排除的路由
};