# React 19 useTransition Hook Bug

This repository demonstrates a common error when using the `useTransition` hook in React 19. The provided component attempts to use `useTransition`, but doesn't handle the pending state correctly which leads to unexpected behaviour. The solution shows the correct way to use the hook and handle pending states effectively. 

## Bug
The bug lies in how the `isPending` state and the `useTransition` hook are used together.  The transition does not start until `isPending` is properly handled.