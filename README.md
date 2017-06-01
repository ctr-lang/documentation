# `ctr` Documnetation

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://github.com/ctr-lang/documentation/blob/master/LICENSE.md)
[![wercker status](https://app.wercker.com/status/fd9715283fdd197f530db440682ec247/s/master "wercker status")](https://app.wercker.com/project/byKey/fd9715283fdd197f530db440682ec247)

This repository contains the raw documentation for [docs.ctr-lang.com](https://docs.ctr-lang.com/), which is comprised of 2000+ Markdown files. However, this repository does not contain the “magic” that turns all the Markdown files into the public facing documentation.

## Contributing

A healthy community is a contributing community, and contributions are appreciated and welcome with open hearts and open fingers particularly if you're one of those elusive grammar kingpins. Firstly, I can't spell to save my life, and at this point, I've given up on the endeavor. Moreover, my writing style is questionably colloquial with a pinch of character which needless to say is not ideal for documentation. Although, in my defense, I got into coding to avoid having to write yet unbeknownst to me life had a cruel joke stored up its sleeve. Now that I've aired out my writing grievances let's drill into the five main categories of contributions.

+ Grammar/Spelling/Syntax
+ Code Update/Fix
+ Writing Style*
+ Translations*
+ Web Accessibility*

If your contribution falls under one of the five main categories please first read the corresponding section before you go any further. If your contribution does not fall under on the five, please pull an [issue](https://github.com/ctr-lang/documnetation/issues) and wait for a response. Otherwise, there are no guarantees your hard work will be merged, and then everyone will feel shitty that you feel shitty since all your efforts will have been for naught.


## Commit Conventions

I encourage you to follow the commit conventions I've laid out in [`CONTRIBUTING.md`](https://github.com/ctr-lang/documentation/blob/master/CONTRIBUTING.md). At the same time, I'm not enforcing the conventions in this repository solely because you might come from a different background, and have serious trepidation about the whole "git" and "command line" gig. So if you don't feel comfortable just do you. I'll be a happy camper either way.

_ps. Don't worry about fucking things up - I got your back_


## Grammar/Spelling/Syntax

Spot an error, did I spell becuase, not how you're supposed to spell because? Does one of my comma-ridden sentences not make sense. I'm all ears on both fronts, and here's what you need to do:

1. Find the Markdown in question, whose directory path will be the same of that of the documentation. For examples, let's use the `pick` Object option for the `attribute` features as an example:
    + URL: `docs.ctr-lang.com/attribute/object/#pick` 
    + File Loc: `./docs/attribute/object/pick.md`
2. Make your edit(s).
4. Add and commit your edits with the subject of `doc-word: [short description]`
3. Push up the grammar/spelling/syntax edits to Github or click the "Commit changes" button if you're making changes on Github itself.
4. That's it, you're done! Thanks! I'll come along and review the changes, and merge them into the documentation or comment need be.


## Code Update/Fix

Spot an error in the code and/or have an idea to make it better and/or clearer? Code edits are pretty straight forward. Here's what you need to do:

1. Find the code you want to edit, which will be located in the `/_code` directory of the particular feature directory you wish to edit. For this example let’s say you want to edit the `media` mixin code for `above`.
    + URL: `docs.ctr-lang.com/media/mixin/#above` 
    + File Loc: `./docs/media/mixin/_code/above.code.md`
2. Make your code edits, and remember both Stylus and YAML `ctr` instances have to compile to the CSS code block. There is no need to edit the `[file].fixture.md` since the file is generated automatically based on the code in the `[file].code.md` file, the file you're editing.
3. Once you're complete, you need to test the code to make sure things are good-to-go, run the commands below.

```bash
npm install
npm test
```

4. Add and commit the code with the subject of `doc-code: [short description]`
5. Push up the code edits or click the "Commit changes" button if you're making changes on Github itself.
6. That's it, you're done! Thanks! I'll come along and review the changes, and merge them into the documentation or comment need be.


## Writing Style

This is a big ticket item, and I hope to be able to offer monetary compensation since it will be quite involved. Like I said previously, I don’t think my writing style is optimal for much outside a local op-ed. And during the writing of the documentation I gave little thought to writing style, but I did try to keep a thread of uniformity. Two months ago I stumbled upon the Material Design [writing style guide](https://material.io/guidelines/style/writing.html#writing-tone), and well, I’m in the red, or at least according to Google I am.

Ideally, this is a job for one individual or a small group, and ideally, there will be dollar bills involved. If you’re interested, please fill out an [application](https://goo.gl/forms/OsUyt9wCpCsUpzra2).


## Translation

Translating the ctr documentation for the [BRIC](https://en.wikipedia.org/wiki/BRIC) countries is something I plan to have done. Additionally, it's something that could involve monetary compensation, but as of right now I’ve decided to hold off on any translation efforts until I have a better idea of what it will entail. Equally important, is the fact that the documentation writing style most likely will be changed first so that it will be easier to translate. If you’re interested, fill out an [application](https://goo.gl/forms/OCbXafEkL7d52Tep2).

## Web Accessibility


As I mentioned in the documentation outside of basic accessibility I don’t know where to start. Needless to say when it comes to [WCAG](https://www.w3.org/WAI/intro/wcag) I'm uninformed and I have not spent much time with the topic yet. So I'm all ears on this front since I'm not sure where to start. Depending on scope and involvement this may include monetary compensation, but first I would like to hear you're thoughts and ideas if you're in the know. If you’re interested, fill out an [application](https://goo.gl/forms/asnzQAnsKZntELrQ2).



---

Best, te
