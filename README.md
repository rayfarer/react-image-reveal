# 📸 React Image Reveal

**ReactImageReveal** is a lightweight React component that displays an image with a smooth reveal effect using CSS transitions. It preloads the image and smoothly fades it in when fully loaded.

## 🚀 Features

- 🔄 **Smooth Reveal:** Fade-in effect when the image is loaded.  
- ⚙️ **Customizable Transitions:** Control transition duration and timing function.  
- 🧩 **Flexible Props:** Customize class name, click handler, and alt text.

---

## 🛠️ Installation

    npm install react react-dom prop-types

*No separate installation required for the component if it's part of your project.*

---

## ⚙️ Usage

    import ReactImageReveal from './ReactImageReveal';

    function App() {
        return (
            <div className="image-container">
                <ReactImageReveal
                    src="https://example.com/my-image.jpg"
                    altText="A beautiful landscape"
                    className="my-image"
                    transitionDuration="2s"
                    transitionTimingFunction="ease-out"
                    onClick={() => alert('Image clicked!')}
                />
            </div>
        );
    }

    export default App;

---

## 🧩 Props

| Prop                       | Type       | Default         | Description                                               |
| -------------------------- | ---------- | --------------- | --------------------------------------------------------- |
| `src`                      | `string`   | **Required**    | The image URL to display.                                 |
| `className`                | `string`   | `''`            | Optional CSS class for styling.                           |
| `onClick`                  | `function` | `() => {}`      | Callback when the image is clicked.                       |
| `altText`                  | `string`   | `'image'`       | Alt text for accessibility.                               |
| `transitionDuration`       | `string`   | `'1s'`          | Duration of the fade-in transition (e.g., `2s`, `500ms`). |
| `transitionTimingFunction` | `string`   | `'ease-in-out'` | CSS timing function for the transition.                   |

---

## 🎨 Custom Styling

The component applies a default `width: 100%` and `height: auto`. You can use the `className` prop to add custom styles:

    .my-image {
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

---

## 🛠️ Development Notes

- The component uses a `useEffect` hook to preload the image and handle the transition.  
- It supports both functional and class-based component use cases through props.  

---

## 📖 License

MIT License © 2025