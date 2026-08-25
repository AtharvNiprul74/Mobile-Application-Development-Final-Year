# 📘 React Native Assessment 4

## 1. What are Props in React Native?

**Props (Properties)** are used to pass data from a parent component to a child component.

Props are **read-only**, which means a child component should not directly modify the props received from its parent.

---

## 2. Write Two Examples of React Native Props

### Example 1

```jsx
function Welcome({ name }) {
  return <Text>Hello {name}</Text>;
}

<Welcome name="Atharv" />
```

### Example 2

```jsx
function Button({ title }) {
  return <Text>{title}</Text>;
}

<Button title="Login" />
```

---

## 3. Difference Between React Native Props and React Props

Props work in the same way in both React and React Native. The main difference is the type of components used.

| React Props | React Native Props |
|---|---|
| Used in web applications. | Used in mobile applications. |
| Uses HTML elements like `<div>` and `<button>`. | Uses native components like `<View>` and `<Text>`. |
| Runs in a web browser. | Runs on Android and iOS devices. |

### React Example

```jsx
function Welcome({ name }) {
  return <div>Hello {name}</div>;
}

<Welcome name="Atharv" />
```

### React Native Example

```jsx
function Welcome({ name }) {
  return <Text>Hello {name}</Text>;
}

<Welcome name="Atharv" />
```

---

## 4. What is `useState`?

**`useState`** is a Hook used to create and manage state in a functional component.

It allows a component to store a value and update that value when required.

### Example

```jsx
const [count, setCount] = useState(0);

<Button
  title={`Count: ${count}`}
  onPress={() => setCount(count + 1)}
/>
```

- `count` stores the current value.
- `setCount` updates the value.
- When the state changes, the component re-renders.

---

## 5. What is `useEffect`?

**`useEffect`** is a Hook used to perform side effects such as fetching data, running timers, subscribing to events, or executing code after rendering.

### Example

```jsx
useEffect(() => {
  console.log("Component loaded");
}, []);
```

The empty dependency array `[]` means the effect runs after the initial render.

---

## 6. What is `useContext`?

**`useContext`** is a Hook used to access shared data from React Context without passing props through every component.

It helps avoid **prop drilling** when the same data is required by multiple components.

### Example

```jsx
const theme = useContext(ThemeContext);

<Text>{theme}</Text>
```

Here, `useContext` retrieves the value provided by `ThemeContext`.

---

## 7. What is `useRef`?

**`useRef`** is a Hook used to store a value that persists between renders without causing a re-render when the value changes.

It can also be used to create a reference to a component.

### Example

```jsx
const inputRef = useRef();

<TextInput ref={inputRef} />
```

Here, `inputRef` can be used to access or control the `TextInput` component.

---
