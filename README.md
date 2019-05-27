


<div align="center">
<img src="https://daybrush.com/scenejs/images/clapperboard.png" width="250"/></p>

## Scene.js Timeline

[![npm version](https://badge.fury.io/js/%40scenejs%2Ftimeline.svg)](https://badge.fury.io/js/%40scenejs%2Ftimeline)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)


A library that represents the timeline of [**Scene.js**](https://github.com/daybrush/scenejs). <br/>You can control time, properties, and items.

[**Scene.js**](https://github.com/daybrush/scenejs) &nbsp;/&nbsp; [**Example**](http://daybrush.com/scenejs/features.html#timeline)

<br/>

![](https://github.com/daybrush/scenejs-timeline/blob/master/demo/images/timeline.png?raw=true)
</div>

### Related Projects
* [**react-scenejs-timeline**](https://github.com/daybrush/scenejs-timeline/tree/master/packages/react-scenejs-timeline): A React Component that control scene.js timeline.
* [**preact-timeline**](https://github.com/daybrush/scenejs-timeline/tree/master/packages/preact-timeline): A Preact Component that control scene.js timeline.

### Installation
```sh
$ npm i @scenejs/timeline
```

```html
<script src="https://daybrush.com/scenejs-timeline/release/latest/dist/timeline.pkgd.min.js"></script>
```


### How to use
```ts
import Scene from "scenejs";
import Timeline from "@scenejs/timeline";

const scene = new Scene({
    ...
});

const timeline = new Timeline(scene, document.body, {
    keyboard: true,
});

timeline.on("select", (e: SelectEvent) => {
    console.log(e.selectedItem);
});
```





```
MIT License

Copyright (c) 2019 Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

