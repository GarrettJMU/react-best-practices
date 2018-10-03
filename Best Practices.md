# react-best-practices

I created this while re-writing a React on Rails application into a pure React application. These are my learnings over that time and hopefully you find some value in reading this.

Things we learned: 
1) <a href="https://material-ui.com/">Material-UI</a> has probably figured it out (seriously)
2) <a href="https://material.io/tools/icons/?style=baseline">Material-UI</a> has probably designed it (Can you tell we like Material UI?)
3) You rarely need Components that aren't functional components. The only time we use components is if we need to use something in the state.
    - You're probably wondering what a functional component is. Here's a simple example.
    - class Welcome extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
       }
       export default Welcome
    - VS
    - function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      export default Welcome
    - These are both imported the same way <Welcome name="Garrett"/>

