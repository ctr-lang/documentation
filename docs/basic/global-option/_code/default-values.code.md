<!-- gen:false -->

<div data-size="3000" data-examples="stylus" class="fw syntax"></div>
```styl
ctrSetOption({
  //------------------------------//
  // Animation defaults
  //------------------------------//
  animation: {
    duration: 0.5s
    ease: cubic-bezier(0.420, 0.000, 0.580, 1.000)
    delay: 0s
    count: 1
    direction: normal
    mode: none
    state: 'running'
  }

  //------------------------------//
  // Transition and State defaults,
  // all use the same syntax as transitionDefault
  //------------------------------//
  transitionDefault: {
    duration: 0.5s
    ease: cubic-bezier(0.420, 0.000, 0.580, 1.000)
    delay: 0s
  }
  // transition: inherits from transitionDefualt
  // hover: inherits from transitionDefualt
  // active: inherits from transitionDefualt
  // focus: inherits from transitionDefualt
  // visited: inherits from transitionDefualt
  // link: inherits from transitionDefualt
  // customState: inherits from transitionDefualt

  //------------------------------//
  // Media query defaults
  //------------------------------//
  media: {
    xs: 400px
    sm: 600px
    md: 800px
    lg: 1050px
    hd: 1800px
  }

  //------------------------------//
  // Grid defaults
  //------------------------------//
  grid: {
    flexbox: true
    gutter: 30px
    rtl: false
  }

  //------------------------------//
  // Responsive Type defaults
  //------------------------------//
  type: {
    rootSize: 16px
    fontSize: {
      minSize: 12px
      maxSize: 21px
      // Defaults to the first and last property of media
      minWidth: null
      maxWidth: null
    }
    letterSpacing: {
      minSize: 3px
      maxSize: 10px
      // Defaults to the first and last property of media
      minWidth: null
      maxWidth: null
    }
    lineHeight: {
      minSize: 1rem
      maxSize: 2rem
      // Defaults to the first and last property of media
      minWidth: null
      maxWidth: null
    }
  }

  //------------------------------------------------//
  // Global options control the inner workings of ctr
  //-----------------------------------------------//
  global: {
    ///------------------------------> style specific options
    // animationShorthand: To use animation property shorthand syntax 
    animationShorthand: false
    // checkLocally: Check for global option properties within the root of every ctr instance
    checkLocally: true
    // classLock: Lock all class styles, so that they can not be overwritten or altered unless specifically specified
    classLock: false
    // doubleColon: All applicable pseudo-elements should use double colon syntax, rather than single colon syntax
    doubleColon: true
    // editColor: The default color for the edit helper
    editColor: rgba(0,0,255,0.1)
    // errorSuppress: Suppress all ctr errors
    errorSuppress: false
    // processBy: How ctr process the instance, refer to docs - basic/processing
    //            possible values: 'level' 'order'
    processBy: 'level'
    // processMedia: Process media queries
    processMedia: true
    // processStyle: Process CSS property styles 
    processStyle: true
    // processMedia: Process animation timeline @keyframes
    processTimeline: true
    // queueAnimation: Place the generation of animation timeline @keyframes styles at the end of the queue, to be processed after the main styles
    queueAnimation: true
    // queueMedia: Place the generation of media query styles at the end of the queue, to be processed after the main styles
    queueMedia: true
    // sort: The sorting source order for generated CSS
    //       possible values: 'len', '-len', 'abc', '-abc', false
    //       Docs: basic/general/#sort-order
    sort: 'len'
    // stateOmitList: States that should not generate transition properties
    stateOmitList: 'link' 'visited' 'optional' 'required' 'valid'
    // transitionOmitList: Values that should not generate transition properties
    transitionOmitList: 'content' 'postion' 'cursor' 'display' 'clear'
    // transitionShorthand: To use transition property shorthand syntax 
    transitionShorthand: false

    //------------------------------//
    // process specific options
    //------------------------------//
    // localVariableUpdate: Allow local variable sibling reference. Default value is true for Stylus but not for Javascript because, well, your in Javascript
    //                      Docs: variable/general/#localVariableUpdate
    localVariableUpdate: true
    // memoize: Memoize results internally
    memoize: true
    // privateVariable: Allow the use of private local variables, ie _<var>_. Default value is true for Stylus but not for Javascript
    //                  Docs: variable/general/#privateVariable
    privateVariable: true
    // propertyReplace: Allow the use of property replacement. Default value is true for Stylus but not for Javascript
    //                  Docs: variable/general/#propertyReplace
    propertyReplace: true
    // rcPath: .ctrrc location path, by default it searches the root dir
    rcPath: false
    // requireWatch: requireWatch Function for ctr-loader
    requireWatch: false
  }
})

```


<div data-size="3000" data-examples="yaml" class="fw syntax"></div>
```yaml
ctr:::setOption:
  ## ---------------------------- ##
  ## Animation defaults
  ## ---------------------------- ##
  animation:
    duration: 0.5s
    ease: cubic-bezier(0.420, 0.000, 0.580, 1.000)
    delay: 0s
    count: 1
    direction: normal
    mode: none
    state: running

  ## ---------------------------- ##
  ## Transition and State defaults,
  ## all use the same syntax as transitionDefault
  ## ---------------------------- ##
  transitionDefault:
    duration: 0.5s
    ease: cubic-bezier(0.420, 0.000, 0.580, 1.000)
    delay: 0s
  # transition: inherits from transitionDefualt
  # hover: inherits from transitionDefualt
  # active: inherits from transitionDefualt
  # focus: inherits from transitionDefualt
  # visited: inherits from transitionDefualt
  # link: inherits from transitionDefualt
  # customState: inherits from transitionDefualt

  ## ---------------------------- ##
  ## Media query defaults
  ## ---------------------------- ##
  media:
    xs: 400px
    sm: 600px
    md: 800px
    lg: 1050px
    hd: 1800px

  ## ---------------------------- ##
  ## Grid defaults
  ## ---------------------------- ##
  grid:
    flexbox: true
    gutter: 30px
    rtl: false

  ## ---------------------------- ##
  ## Responsive Type defaults
  ## ---------------------------- ##
  type:
    rootSize: 16px
    fontSize:
      minSize: 12px
      maxSize: 21px
      # Defaults to the first and last property of media
      minWidth: null
      maxWidth: null
    letterSpacing:
      minSize: 3px
      maxSize: 10px
      # Defaults to the first and last property of media
      minWidth: null
      maxWidth: null
    lineHeight:
      minSize: 1rem
      maxSize: 2rem
      # Defaults to the first and last property of media
      minWidth: null
      maxWidth: null

  ## --------------------------------------------- ##
  ## Global options control the inner workings of ctr
  ## --------------------------------------------- ##
  global:
    ## ---------------------------- ##
    ## style specific options
    ## ---------------------------- ##
    # animationShorthand: To use animation property shorthand syntax 
    animationShorthand: false
    # checkLocally: Check for global option properties within the root of every ctr instance
    checkLocally: true
    # classLock: Lock all class styles, so that they can not be overwritten or altered unless specifically specified
    classLock: false
    # doubleColon: All applicable pseudo-elements should use double colon syntax, rather than single colon syntax
    doubleColon: true
    # editColor: The default color for the edit helper
    editColor: rgba(0,0,255,0.1)
    # errorSuppress: Suppress all ctr errors
    errorSuppress: false
    # processBy: How ctr process the instance, refer to docs - basic/processing
    #            possible values: 'level' 'order'
    processBy: level
    # processMedia: Process media queries
    processMedia: true
    # processStyle: Process CSS property styles 
    processStyle: true
    # processMedia: Process animation timeline @keyframes
    processTimeline: true
    # queueAnimation: Place the generation of animation timeline @keyframes styles at the end of the queue, to be processed after the main styles
    queueAnimation: true
    # queueMedia: Place the generation of media query styles at the end of the queue, to be processed after the main styles
    queueMedia: true
    # sort: The sorting source order for generated CSS
    #       possible values: 'len', '-len', 'abc', '-abc', false
    #       Docs: basic/general/#sort-order
    sort: len
    # stateOmitList: States that should not generate transition properties
    stateOmitList: [link, visited, optional, required, valid]
    # transitionOmitList: Values that should not generate transition properties
    transitionOmitList: [content, postion, cursor, display, clear]
    # transitionShorthand: To use transition property shorthand syntax 
    transitionShorthand: false

    ## ---------------------------- ##
    ## process specific options
    ## ---------------------------- ##
    # comment: Custom comment for write method
    comment: false
    # commentFile: Included ctr source file path in comment
    commentFile: true
    # duplicateCSS: Allow for duplication of exact CSS styles
    duplicateCSS: false
    # localVariableUpdate: Allow local variable sibling reference. Default value is true for Stylus but not for Javascript because, well, your in Javascript
    #                      Docs: variable/general/#localVariableUpdate
    localVariableUpdate: true
    # memoize: Memoize results internally
    memoize: true
    # privateVariable: Allow the use of private local variables, ie _<var>_. Default value is true for Stylus but not for Javascript
    #                  Docs: variable/general/#privateVariable
    privateVariable: true
    # propertyReplace: Allow the use of property replacement. Default value is true for Stylus but not for Javascript
    #                  Docs: variable/general/#propertyReplace
    propertyReplace: true
    # rcPath: .ctrrc location path, by default it searches the root dir
    rcPath: false
    # requireWatch: requireWatch Function for ctr-loader
    requireWatch: false
```



<div class="cf"></div>
