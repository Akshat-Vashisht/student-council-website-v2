import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/','/contact','/clubs','/team','events']
})