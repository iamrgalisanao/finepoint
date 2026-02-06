---
trigger: always_on
---

Add comments esplaining:
- Why the code exists (not what it does)
- Any tricky logic
- TODO items

Use JSDoc for functions:
```typescript
/**
 * Calculates user's total points
 * @param userId - The user's ID
 * @returs Total points earned
 */
 function func(argOne: String): number {
  // implementation
}