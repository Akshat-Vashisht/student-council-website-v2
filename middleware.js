import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/','/contact','/clubs','/team','/events', '/api/photos/find','/api/photos/upload','/api/events/pre','/api/events/post','/mental-wellbeing']
})