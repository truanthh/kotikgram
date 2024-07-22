import { openDB } from "idb";

const DB_NAME = "maindb";
const STORE_NAME = "likedImages";

export async function initDB() {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
  return db;
}

export async function addItems(items) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  for (const item of items) {
    await store.add(item);
  }
  // await store.add(items);

  await tx.done;
}

export async function addItem(item) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);

  await store.add(item);

  await tx.done;
}

export async function deleteItem(id) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);

  await store.delete(id);

  await tx.done;
}

export async function getItems() {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
}

export async function hasItems() {
  try {
    const db = await initDB();
    const count = await db.count(STORE_NAME);
    return count > 0;
  } catch (error) {
    console.log("Error checking items:", error);
    throw error;
  }
}
