# React + Redux setup example

This repository contains a pattern to follow when you're creating a React application using Redux. 

It follows a Domain Driven Design kind of style.

## Example

```
/redux
  /user
    actions.js
    reducer.js
    types.js
  store.js
```

### What does it mean?

All files related to the "user" resource will live in `/user` folder. Simple as that. In this case, the files are related to Redux as well. The `store.js` file is responsible to bootstrap redux with all reducers included.

## What is the other way

There is plenty of other ways. I used to do like that:

```
/redux
  /actions
    userAction.js
  /reducers
    userReducer.js
    root.js
  /types
    userTypes.js
  ... so on and so forth
```

### Why have you stoped doing this way?

DDD is more scalable. Using the above approach, your resources are going to be splitted out in nth numbers of folders that is needed. If you want to add `userUtils.js` for instance, you have to create `/utils/userUtils.js`. It means that you have to spend more time searching the correct file than writing real code.

## Some thoughts

This is not a rule, and does not define what is "correct" and what is "wrong". If you think different than me, I would be happy to talk with you and maybe change my mind. It's always nice to see other people perspective over yours.

Also, another approach is to create those actions and reducers inside your `/pages` (or whatever you call), where your React components live. By now, this is too much for me, and I found that my way is a great balance between both worlds.

## License

[MIT](https://github.com/vitorfreitas/redux-setup-example/blob/master/LICENSE)