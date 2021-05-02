//动态引入当前目录下的route文件
const requireRoutes = require.context("@", true, /.+\.route.ts$/);
const routes = requireRoutes.keys().map((path) => requireRoutes(path).default);

export { routes };
