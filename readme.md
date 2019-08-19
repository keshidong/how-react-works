1. 我们只是为什么研究react是如何工作的，那么我们要减少项目不相关的其他依赖，比如webpack，jsx等，直击启动react的最基本需要。同时保证项目尽可能简单。

https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgfAUABHYBnADgQwHZQBYFMA2-A9nAO5EBO-IAhMAPSqawPjQxA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3&externalPlugins=
jsx -> js

2. 找出明确可执行切入点

3. ReactDOM.render -> legacyRenderSubtreeIntoContainer -> unbatchedUpdates -> updateContainer -> scheduleRootUpdate
                        | -> enqueueUpdate(current$$1, update)，用update更新current$$1.updateQueue的值
scheduleRootUpdate ->   |
                        | -> scheduleUpdateOnFiber -> renderRoot -> workLoopSync -> performUnitOfWork

调试技巧
1. 函数的输入，函数的输出（修改非局部变量的属性，return值）

