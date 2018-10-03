# react-best-practices

I created this while re-writing a React on Rails application into a pure React application. These are my learnings over that time and hopefully you find some value in reading this.

Things we learned: 
1) <a href="https://material-ui.com/">Material-UI</a> has probably figured it out (seriously)
2) <a href="https://material.io/tools/icons/?style=baseline">Material-UI</a> has probably designed it (Can you tell we like Material UI?)
3) You rarely need Components that aren't functional components. The only time we use components is if we need to use something in the state.
    - You're probably wondering what a functional component is. <a href="/FirstExample.jsx">Here's a simple example.</a>
4) We have yet to need to use Component, instead we use <a href="https://reactjs.org/docs/react-api.html#reactpurecomponent">PureComponent</a>. 
    - The TLDR is "If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases."
5) We're a huge fan of Material UI decorators. Most notably withStyles and withWidth. 
    - <a href="/withStyle.jsx">Click here for an example of withStyles</a>.
    - <a href="/withWidth.jsx">Click here for an exmample of withWidth</a>.
6) We combine multiple decorators with <a href="https://github.com/acdlite/recompose">recompose</a>. 
    - Click here for an example of combining decorator on a class and on a functional component

