
# <a target="_blank" href="https://eduardo-morales-virtual-pet.firebaseapp.com/">Try the project now</a>

# Virtual Pet

This is a simple virtual pet game built using Solid.js. The game allows you to take care of a pet by feeding, playing, and letting it sleep. The pet evolves as it ages and can experience random events.

## Features

- **State Management**: Manage the pet's hunger, boredom, energy, age, and life status.
- **Lifecycle Management**: Automatically update the pet's state every 2 seconds.
- **Pet State Updates**: Determine the pet's evolution based on its age and state.
- **Random Events**: Occasionally trigger random events that affect the pet's state.
- **User Interactions**: Feed, play, and let the pet sleep to change its state.
- **UI**: Display the pet's current state and provide buttons for interactions.

## Installation

1. **Clone the repository**:
        ```bash
   git clone https://github.com/your-username/virtual-pet.git
   cd virtual-pet
        ```

2. **Install dependencies**:
        ```
    bash
    npm install
        ```

3. **Start the develpment server**:
        ```bash
    npm run dev
        ```




## Usage

**Feed**: Decrease hunger, increase energy and boredom.

**Play**: Decrease boredom, increase hunger, and decrease energy.

**Sleep**: Increase energy, increase hunger, and increase boredom.
