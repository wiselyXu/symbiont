console.log('Seeding database...')

// Mock data for development
const mockUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user' },
]

const mockProducts = [
  { id: 1, name: 'Product A', price: 99.99, category: 'electronics' },
  { id: 2, name: 'Product B', price: 49.99, category: 'clothing' },
  { id: 3, name: 'Product C', price: 199.99, category: 'electronics' },
]

console.log('Mock users:', mockUsers)
console.log('Mock products:', mockProducts)
console.log('Seed completed!')

export {} // Ensure this is a module