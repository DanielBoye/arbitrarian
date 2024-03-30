import { Database } from "@tableland/sdk";

/* 
Create Table function should only be used by developers as it is not intended for users

EXAMPLE:
createTable(signer, "users", `id INTEGER PRIMARY KEY, user_addr TEXT NOT NULL, username TEXT, quizes_zolved INTEGER DEFAULT 0`)
*/

export async function createTable(signer, tableName, schema) {
    try {
        const db = new Database({ signer });

        const { meta: create } = await db
            .prepare(`CREATE TABLE "${tableName}" (${schema});`)
            .run();
        await create.txn?.wait();
        console.info(`Created table: ${create.txn}.`);
    } catch (err) {
        console.error(err.message);
    }
}

// Insert new user into users table
export async function insertUser(signer, tableName, user_addr) {
    try {
        const db = new Database({ signer });

        if (tableName) {
            const { meta: insert } = await db
                .prepare(`INSERT INTO (?) (user_addr) VALUES (?);`)
                .bind(tableName, user_addr)
                .run();
            await insert.txn?.wait();
            console.info(
                `Successfully inserted ${user_addr} into users table.`
            );
        }
    } catch (err) {
        console.error(err.message);
    }
}

// Update username for a a registered user
export async function updateUsername(signer, tableName, user_addr, username) {
    try {
        const db = new Database({ signer });

        if (tableName) {
            const { meta: update } = await db
                .prepare(`UPDATE (?) SET username = (?) WHERE user_addr = (?);`)
                .bind(tableName, username, user_addr)
                .run();
            await update.txn?.wait();
            console.info(
                `Successfully updated username for ${user_addr} to ${username}.`
            );
        }
    } catch (err) {
        console.error(err.message);
    }
}

// Increment # of solved quizes by one for the specified user_addr
export async function incrementSolvedQuizes(signer, user_addr) {
    try {
        const db = new Database(signer);

        if (tableName) {
            const { meta: increment } = await db
                .prepare(
                    `UPDATE (?) SET quizes_solved = quizes_solved + 1 WHERE user_addr = (?);`
                )
                .bind(tableName, user_addr)
                .run();
            await increment.txn?.wait();
            console.info(
                `Successfully incremented # of solved quizes by one for ${user_addr}.`
            );
        }
    } catch (err) {
        console.error(err.message);
    }
}

// Read table function
export async function readTable(signer, tableName) {
    try {
        const db = new Database({ signer });

        if (tableName) {
            const { results } = await db
                .prepare(`SELECT * FROM ${tableName};`)
                .all();
            console.info(`Read data from table '${tableName}':`);
            console.info(results);
            return results;
        }
    } catch (err) {
        console.error(err.message);
    }
}
