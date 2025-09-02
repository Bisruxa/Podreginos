import { AsyncDatabase } from "promised-sqlite3";

const initDb = async () => {
  const db = await AsyncDatabase.open("./pizza.sqlite");

  await db.run(`
    CREATE TABLE IF NOT EXISTS pizza_types (
      pizza_type_id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT,
      ingredients TEXT
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS pizzas (
      pizza_id INTEGER PRIMARY KEY,
      pizza_type_id INTEGER,
      size TEXT,
      price REAL,
      FOREIGN KEY (pizza_type_id) REFERENCES pizza_types(pizza_type_id)
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      order_id INTEGER PRIMARY KEY,
      date TEXT,
      time TEXT
    )
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS order_details (
      order_detail_id INTEGER PRIMARY KEY,
      order_id INTEGER,
      pizza_id INTEGER,
      quantity INTEGER,
      FOREIGN KEY (order_id) REFERENCES orders(order_id),
      FOREIGN KEY (pizza_id) REFERENCES pizzas(pizza_id)
    )
  `);

  // Insert sample data
  await db.run(`
    INSERT INTO pizza_types (name, category, ingredients) VALUES
      ('Margherita', 'Veg', 'Tomato, Cheese, Basil'),
      ('Pepperoni', 'Non-Veg', 'Tomato, Cheese, Pepperoni')
  `);

  await db.run(`
    INSERT INTO pizzas (pizza_type_id, size, price) VALUES
      (1, 'S', 5.99),
      (1, 'M', 7.99),
      (1, 'L', 9.99),
      (2, 'S', 6.99),
      (2, 'M', 8.99),
      (2, 'L', 10.99)
  `);

  console.log("Database initialized successfully!");
  await db.close();
};

initDb().catch(console.error);
