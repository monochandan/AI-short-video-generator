import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imgUrl:varchar('imageUrl'),
    subscription:boolean('subscription').default(false)
})