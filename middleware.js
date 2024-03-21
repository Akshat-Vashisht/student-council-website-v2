import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/','/contact','/clubs','/team','/events', '/api/pre_event', '/api/post_event', '/api/photos','/mental-wellbeing']
})