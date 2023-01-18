# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- Firstly old code checks  if event exist then assign partitionKey to candidate else generate hash. 
so I improved it by using ternary operator and also create generateHash and getCandidateFromPartitionKeyOfEvent functions to 
make it seprate and easy to undersatnd logic.
- Second old block of code check if candidate exist and not a string then stringify it otherwise  assign default value.Fot that I assign initially default value to candidate and candidate key value will be object or any other value only in case if it is passed 
in event paramater that is why I moved that part to getCandidateFromPartitionKeyOfEvent function
- sha3-512 hash length is 12.In getCandidateFromPartitionKeyOfEvent function if candidate's length is greater than 256 then generate hash otherwise return candidate.
