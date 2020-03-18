# Client

This project was created using `create-react-app` using the TypeScript template. TypeScript was chosen for this project due to the confidence it gives when developing large applications, and the ability to share types with the server application, considering the complex structure of the data provided.

Material UI was the UI framework of choice due to its robust component library and ease of developing user interfaces. Some additional components were used based on Material UI, such as `material-table` and `material-ui-image` .

For the UI, all the functionality was limited to one screen using detail views and drawers. This was done to avoid adding additional routing complexity to the project and focus on delivering a clean interface.

Storybook was used to ease development of UI components without the need to have a working API running or the connector logic. Since we are using TypeScript and have confidence in the structure of the data that will be used, we use `faker` to create mock functions which mimic the shape of real data that will be consumed by the components. Combining this will Storybook knobs, we have a very flexible environment for developing UI components.

## Built with

* create-react-app
* Material UI
* Axios
* TypeScript
* Storybook
* Faker