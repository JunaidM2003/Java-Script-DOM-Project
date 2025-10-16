# DOM Manipulation Projects

This repository showcases two interactive web projects built using **HTML, CSS, and vanilla JavaScript**.  
These projects demonstrate fundamental **Document Object Model (DOM) manipulation techniques**, focusing on handling user input, dynamically updating the UI, and applying conditional logic.

---

## Project 1: YouTube Subscribe Button

This project simulates the interactive functionality of a **subscribe button**, dynamically changing its text and style based on the user's state.

### Functionality (`subscribe` function in `dom-project.js`)

- **Triggered by:** An `onclick` event on the button element.  
- **State Toggle:** Reads the button's current text content.  
  - If the text is `"Subscribe"`, it changes to `"Subscribed"` and applies the `is-subscribed` CSS class (gray background, black text).  
  - If the text is `"Subscribed"`, it reverts back to `"Subscribe"` and removes the `is-subscribed` class (original red background).  
- **DOM Manipulation:** Uses `.innerHTML` to update text and `.classList.add()` / `.classList.remove()` to toggle the visual state.

### Styling

- Initial state uses a **bold, red background** (`.subscribe-button`).  
- `.is-subscribed` class defines the distinct appearance for the "Subscribed" state.

---

## Project 2: Amazon Shipping Calculator

This project provides a simple utility to calculate the **total cost of an order**, including a conditional shipping fee based on the order’s value.

### Functionality (`calculateTotal` and `handleCost` functions in `dom-project.js`)

#### `calculateTotal()`

1. **Input Retrieval:** Uses `document.querySelector('.js-cost-input')` to get the value from the input field.  
2. **Data Conversion:** Converts the string input to a number using `Number()`.  
3. **Conditional Logic:** Adds a £10 shipping fee if the cost is less than £40.  
4. **Output Display:** Shows the final calculated amount in `.js-total-cost`.

#### `handleCost(event)`

- Listens for keyboard input (`onkeydown`) in the cost field.  
- Checks if the pressed key is `'Enter'` (`event.key === 'Enter'`).  
- Automatically triggers `calculateTotal()` when Enter is pressed, allowing users to calculate without clicking the button.

### User Interaction

- Users can calculate the total **by clicking the "Calculate" button** or **pressing Enter** while focused on the input box.

---

## Key Takeaways

These projects effectively demonstrate essential **front-end JavaScript techniques**:

- **Event Handling:** Responding to both mouse clicks (`onclick`) and keyboard presses (`onkeydown`).  
- **DOM Querying:** Selecting elements efficiently with `document.querySelector()`.  
- **Property Manipulation:** Modifying element properties, including text (`.innerHTML`) and CSS classes (`.classList`).  
- **Data Validation:** Converting string inputs to numbers (`Number()`) for calculations.

---

## How to Load and Run Locally

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/yourusername/dom-manipulation-projects.git
