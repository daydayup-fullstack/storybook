## Building component with storybook

### CloneRepo之后, 第一件你要做的事情
$ `npm install`

### How to start storybook? 
$ `npm start` or `yarn storybook` or `npm run storybook`


### Material Icons - Usage
[Material Design - Icons](https://material.io/resources/icons/?style=baseline)

```html
<span class="material-icons">
favorite
</span>
```

### 请在components文件夹创建你的component
文件结构请参考Sample Component

![](https://user-images.githubusercontent.com/1281209/80867048-a94b8980-8cc4-11ea-8689-0edd622a617b.png)


### 在stories文件夹创建相对应的xxx.stories.js文件
stories文件写法, 请参考 `2-Sample.stories.js`
1. import react 和 your component.
2. 以下面的格式export这个story.
3. 在这里设置你的dummy或者testing data.
4. export不同的情形,设置或者状态.

![](https://user-images.githubusercontent.com/1281209/80867466-d26d1980-8cc6-11ea-9223-0b448af0cd33.png)

### Remember to import pre-defined styles in `_variable.scss`
引入的文件路径请参考`sample.scss`

```scss
@import "../../style/variables";
```



