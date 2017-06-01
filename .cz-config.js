
module.exports = {
  types: [
    {value: 'syntax',   name: 'syntax:   Spelling, grammar, punctuation, or mechanics'},
    {value: 'doc-word', name: 'doc-word: Documentation wording update/change'},
    {value: 'doc-code', name: 'doc-code: Documentation code update/change'},
    {value: 'style',    name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)'},
    {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature'},
    {value: 'update',   name: 'update:   Updates feature'},
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'test',     name: 'test:     Adding missing tests'},
    {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'},
    {value: 'revert',   name: 'revert:   Revert to a commit'},
    {value: 'WIP',      name: 'WIP:      Work in progress'},
    {value: 'init',     name: 'init:     Initial commit'}
  ],
  // scopes: {Array of Strings}: Specify the scopes for your particular project.
  // Eg.: for some banking system: ["acccounts", "payments"].
  // For another travelling application: ["bookings", "search", "profile"]
  scopes: [
    {name: 'markdown:all'},
    {name: 'markdown:animation'},
    {name: 'markdown:attribute'},
    {name: 'markdown:basic'},
    {name: 'markdown:class'},
    {name: 'markdown:component'},
    {name: 'markdown:element'},
    {name: 'markdown:grid'},
    {name: 'markdown:helpers'},
    {name: 'markdown:javascript'},
    {name: 'markdown:media'},
    {name: 'markdown:merge'},
    {name: 'markdown:non'},
    {name: 'markdown:start-here'},
    {name: 'markdown:state'},
    {name: 'markdown:transition'},
    {name: 'markdown:variable'},
    {name: '_scripts_'},
    {name: '__tests__'},
    {name: 'root'}
  ],
  // scopeOverrides: {Object where key contains a Array of String}:
  // Use this when you want to override scopes for a specific commit type.
  // Example bellow specify scopes when type is fix:
  scopeOverrides: {},
  // allowCustomScopes: {boolean, default false}: adds the option custom to
  // scope selection so you can still typea scope if you need.
  allowCustomScopes: true,
  // allowBreakingChanges: {Array of Strings: default none}. List of commit
  // types you would like to the question breaking change prompted. Eg.: ['feat', 'fix']
  allowBreakingChanges: ['feat', 'fix']
};
