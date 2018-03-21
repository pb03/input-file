# Input-file.js

A tiny (1kb minified) javascript plugin that automatically stylizes the native input field.


<img src="https://github.com/pb03/input-file/raw/master/demo.gif" width="620" alt="Demo">

[Live demo](https://codepen.io/prasanjit/full/NxjZMO/)

## Installation

`npm i input-file`

## Usage

```html
<html lang="en">
<head>
	<link rel="stylesheet" href="../input-file.css">
</head>

<body>

	<input type="file" name="files" multiple>

	<script src="../input-file.min.js"></script>
	<script>
		new InputFile({
			// options
		});
	</script>
</body>
</html>
```

## Options
| Property | Default | Description |
|---|---|---|
| `buttonText` | 'Choose files' | Label for the button |
| `hint` | 'or drag and drop files here' | Help text |
| `message` | 'files chosen' | Message shown after selecting files |