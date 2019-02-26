# madlib

Madlib generator

`madlib` requires the [WordNet Database](https://wordnet.princeton.edu/) for the index of words.

Get the database and unpack on the root directory.

## Usage

Supply a valid Handlebars to `madlib`.

Use tags for words with specific parts of speech. If you want a noun followed by a verb, use:

    {{noun.[0]}} {{verb.[0]}}

If you want two different nouns side by side:

    {{noun.[0]}} {{noun.[1]}}

If you want the same noun twice, use:

    {{noun.[0]}} {{noun.[0]}}

Here are the available Handlebars helpers for constructing your madlib:

|Name|Used for|
|----|--------|
|`plural`|noun|
|`ing`/`gerund`|verb|
|`past`|verb
|`pastParticiple`|verb|
|`present`|verb|
|`comparative`|adjective/adverb|
|`superlative`|adjective/adverb|

## License

MIT. See the `LICENSE` file for details.
