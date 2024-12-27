# Chat Application

## Technologies Used

**Vue 3,** **Pinia,** **Vite,** **TypeScript,** **CSS,** **ESLint**

---

## How It Works

1. **Messages**: Displayed dynamically with different styles for "self" and "others."
2. **Compose Section**:
    - A textarea expands and scrolls for long messages.
    - **Send** button aligned the textarea.
3. **Tooltips**: Hovering over a thumbnail shows the user's name.
4. **Error Handling**:
    - The mock API has a 10% chance of failing (simulating a network error). In that case:
        - Display a red error message at the bottom of the input area.
        - Restore unsent messages to the input field for retrying.
    - Successful messages stay in the chat.

---

## How to Run

* Install dependencies with:
   ```bash
   npm install
   ```
* Start the project with:
   ```bash
   npm run dev
   ```
* Open browser at:
   ```bash
   http://localhost:5173
   ```