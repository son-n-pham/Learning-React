# Learning-React

## Create React App:
Tool to create my first React App.
- Nodejs is needed to install Create React App tool.
- Run the below code to install the first react app "react-complete-guide"

```react
npx create-react-app react-complete-guide
```
Build an app


## Styling in JSX

![image](https://user-images.githubusercontent.com/79841341/181273158-9a2eb8a4-d1da-447a-b9cf-ef5c03988ee7.png)

## 3 Tenets of Component

![image](https://user-images.githubusercontent.com/79841341/181276606-a8684f7c-06ba-4701-bab4-754c39707143.png)

## Reusing components

![image](https://user-images.githubusercontent.com/79841341/184497102-8b4e3ac4-f1d8-401d-b777-cd74f7fa9b83.png)

## Link components to main index.js

To link the new components, we use export and import

![image](https://user-images.githubusercontent.com/79841341/184497477-422c169f-d66a-4908-af75-218705bd5f77.png)

## Passing properties from parent to child

Props is used to do so.

![image](https://user-images.githubusercontent.com/79841341/184497661-d4b0b6ae-c693-4953-9391-4c97ece250a1.png)

![image](https://user-images.githubusercontent.com/79841341/184497675-3d81b6c0-45db-41f2-b37c-0b3f839d0a0f.png)

This can be done with the below in index.js

![image](https://user-images.githubusercontent.com/79841341/184497733-71a97945-fb68-4be5-9908-d0f558ec456d.png)

## Function and Class Components

![image](https://user-images.githubusercontent.com/79841341/184521481-0503d86c-5f5f-4e11-9ca2-d10814522468.png)

![image](https://user-images.githubusercontent.com/79841341/184521514-e222085b-b24b-4147-acde-40e55cefc41b.png)

![image](https://user-images.githubusercontent.com/79841341/184521524-9460d26e-b699-4e8f-837f-1617107c63c2.png)

## Class in React

![image](https://user-images.githubusercontent.com/79841341/184525983-cf0bc380-a3a0-4fa5-8b70-b1532dfbdbd8.png)

## State in React

![image](https://user-images.githubusercontent.com/79841341/184526000-9759af11-1f11-431b-80f7-c19e1cbe5f87.png)

## Component Lifecycle

![image](https://user-images.githubusercontent.com/79841341/184532844-d228c6e9-82fc-4c5b-b69d-a1ae77256c57.png)

## Event Handler

![image](https://user-images.githubusercontent.com/79841341/184541532-237c95ef-93aa-4507-b564-805e0ef6a0fd.png)

To add event handler such as the above to an element, we just add it/them as (a) prop(s), then pass the callback to that event handler. Below is an example of the codes. It is the Uncontrolled as React world does not know the input. If it needs to update, it has to reach out to DOM.

![image](https://user-images.githubusercontent.com/79841341/185620620-25240004-e473-4860-bac4-c7cc90edc535.png)

The solution for it is to re-factor to update the state term, which will allow React world to know the input value all the time without accessing to DOM. Below is the solution, which updated the state of class SearchBar.

![image](https://user-images.githubusercontent.com/79841341/185623552-904fa0ae-a543-4bb0-8200-b57fbf5038bd.png)

![image](https://user-images.githubusercontent.com/79841341/185623690-2b6d3594-7882-4c9e-9efd-2bb065d086b4.png)

## Passing props from children back to parent

So far, we can easily pass props from parent to children such App passes props to SearchBar.

![image](https://user-images.githubusercontent.com/79841341/185623926-27ba7426-4801-4c9c-913c-2a226189cedf.png)

What can we do to pass state term back to App? Solution is that App send its method to children via props, and that method can update back to App whenever it is run in children.

![image](https://user-images.githubusercontent.com/79841341/185624216-b94565d9-2a79-4e6f-9c00-1a15d1c030d7.png)

### A bit review of this keyword

![image](https://user-images.githubusercontent.com/79841341/185629916-47ee10c1-6944-40b5-9c87-a80a7337c702.png)

![image](https://user-images.githubusercontent.com/79841341/185631927-2e05dcad-6941-4c74-a94c-29ab0eba9d48.png)

Normal function needs to have the object calling it for this keyword to be defined. Arrow function can just automatically take the surrounding where the function is called for 'this' keyword.

![image](https://user-images.githubusercontent.com/79841341/185650215-e9a34983-2190-4989-bff2-b2704e5447f8.png)



