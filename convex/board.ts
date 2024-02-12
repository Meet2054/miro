import { v } from "convex/values";
import { mutation } from "./_generated/server";


const imeges = [
    "/paceholder/1.svg",
    "/paceholder/2.svg",
    "/paceholder/3.svg",
    "/paceholder/4.svg",
    "/paceholder/5.svg",
    "/paceholder/6.svg",
    "/paceholder/7.svg",
    "/paceholder/8.svg",
    "/paceholder/9.svg",
    "/paceholder/10.svg",
]




export const create = mutation({
    args: { 
        title: v.string(),
        orgId: v.string(),
    },
    handler: async (ctx,args)  => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthenticated");
        }

        const randomImage = imeges[Math.floor(Math.random() * imeges.length)];

        const board = await ctx.db.insert("board", {
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: randomImage,
        });
        return board;
    },
})