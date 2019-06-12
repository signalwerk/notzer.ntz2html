## `notzer` object
### `notzer.type`
`type` indicates what element type we are representing.   
Possible values:
* `node` – a representation of a node
* `value` – only a text-value

### `notzer.node`
`node` represents the name of the tag of an element.

### `notzer.class`
`class` named classes for the node

## Examples
### minimal node

```html
<p/>
```

```js
{
  "notzer": {
      "type": "node"
      "node": "p",
  }
}
```

### node with clas

```html
<p class="foo"/>
```

```js
{
  "notzer": {
      "type": "node"
      "node": "p",ator
      "class": "foo",
  }
}
```

### minimal text

```html
<p>hello</p>
```

```js
{
  "notzer": {
      "type": "node"
      "node": "p",
  },
  "children": [
    {
      "notzer": {
        "type": "value"
      }
      "value": "hello"
    }
  ]
}
```









```js
{
  "notzer": {

      "node": "p",
      "class": "GT",
      "type": "element"

      // ICML extension
      "icml": {
        "type": "block",
        "title": "GT" // fallback
      }
  },
  "value": "Text",
  "children": []
}

```
