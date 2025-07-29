import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth', 'routes/auth.tsx'),
    route('/upload', 'routes/upload.tsx'),
    route('/resume/:id', 'routes/resume.tsx'),
    route('/wipe', 'routes/wipe.tsx'),
    route('/politique', 'routes/politique.tsx'),
    route('/conditions', 'routes/conditions.tsx'),
    route('/mentions', 'routes/mentions.tsx'),
] satisfies RouteConfig;
